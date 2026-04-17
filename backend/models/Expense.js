const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount']
  },
  currency: {
    type: String,
    default: 'USD'
  },
  category: {
    type: String,
    required: [true, 'Please select a category']
  },
  type: {
    type: String,
    enum: ['personal', 'group'],
    default: 'personal'
  },
  groupId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Group',
    default: null
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  splitWith: [{
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    amount: Number,
    paid: { type: Boolean, default: false }
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
