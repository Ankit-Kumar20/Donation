const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://adarshanatia:7SYI6ffmYKvlPqr6@cluster0.sfcohws.mongodb.net/Donation-app');
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;