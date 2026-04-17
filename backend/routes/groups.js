const express = require("express");
const router = express.Router();
const Group = require("../models/Group");

// @route   POST api/groups
// @desc    Create a new group
router.post("/", async (req, res) => {
  const { name, description, members, createdBy } = req.body;
  try {
    const newGroup = new Group({ name, description, members, createdBy });
    const group = await newGroup.save();
    res.json(group);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   GET api/groups/user/:userId
// @desc    Get all groups a user belongs to
router.get("/user/:userId", async (req, res) => {
  try {
    const groups = await Group.find({ members: req.params.userId }).populate("members", "name email avatar");
    res.json(groups);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
