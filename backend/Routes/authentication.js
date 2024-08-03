const express = require('express');
const router = express.Router();
const User = require('../mongoose-models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const hashPassword = require('../hashpassword.js');

// Signup route
router.post('/signup', async (req, res) => {
  const { username, password, email, private } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).send('Email already exists');
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ username, password: hashedPassword, email , private });
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login route
router.post('/login', async (req, res) => {
    const { email , password } = req.body;
    try {
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(404).send('User not found');
      }
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Invalid credentials');
  
      const token = jwt.sign({ userId: user._id, username: user.username, email: user.email }, 'your_jwt_secret');
      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
module.exports = router;
