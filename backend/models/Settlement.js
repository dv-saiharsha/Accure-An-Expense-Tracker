const mongoose = require("mongoose");

const SettlementSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  to: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  groupId: {
    type: mongoose.Schema.ObjectId,
    ref: "Group",
    default: null,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "completed",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Settlement", SettlementSchema);
