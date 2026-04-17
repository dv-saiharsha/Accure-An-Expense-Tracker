const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const Settlement = require("../models/Settlement");

// @route   POST api/expenses/settle
// @desc    Settle a debt between users (personal or group)
router.post("/settle", async (req, res) => {
  const { from, to, amount, groupId } = req.body;
  console.log(`[POST] Settlement Attempt: ${from} -> ${to} ($${amount})`);
  
  try {
    const settlement = new Settlement({
      from,
      to,
      amount,
      groupId: groupId || null,
      status: "completed",
    });

    await settlement.save();

    // Trigger update logic for individual and group balances if necessary
    // This will be used to show "settled up" message under the person/group activity
    res.status(201).json(settlement);
  } catch (err) {
    console.error(`[SETTLE ERROR] ${err.message}`);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/expenses/activity/:userId
// @desc    Get all activities (expenses and settlements) for a user
router.get("/activity/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const expenses = await Expense.find({
      $or: [{ user: userId }, { "splitWith.user": userId }],
    }).populate("user", "username").populate("splitWith.user", "username");

    const settlements = await Settlement.find({
      $or: [{ from: userId }, { to: userId }],
    }).populate("from", "username").populate("to", "username");

    // Merge and sort by date
    const activity = [...expenses, ...settlements].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    res.json(activity);
  } catch (err) {
    console.error(`[ACTIVITY ERROR] ${err.message}`);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/expenses/group/:groupId
// @desc    Get group activities
router.get("/group/:groupId", async (req, res) => {
  try {
    const expenses = await Expense.find({ groupId: req.params.groupId }).populate("user", "username");
    const settlements = await Settlement.find({ groupId: req.params.groupId }).populate("from to", "username");

    const activity = [...expenses, ...settlements].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    res.json(activity);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
