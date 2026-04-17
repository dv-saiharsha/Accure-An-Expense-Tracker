const express = require("express");
const router = express.Router();
const User = require("../models/User");

// @route   GET api/users/search/:term
// @desc    Search users by name/email
router.get("/search/:term", async (req, res) => {
  try {
    const users = await User.find({
      $or: [
        { name: { $regex: req.params.term, $options: "i" } },
        { email: { $regex: req.params.term, $options: "i" } }
      ]
    }).select("name email avatar");
    res.json(users);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   GET api/users/:id
// @desc    Get profile
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
