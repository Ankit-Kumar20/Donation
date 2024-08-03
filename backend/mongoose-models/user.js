const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  amountPaid: { type: Number, required: true },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  transactions: [transactionSchema], 
  private: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
