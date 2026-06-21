// backed/routes/auth.js

const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const bcrypt  = require('bcryptjs');
const Admin   = require('../models/admin');


// ════════════════════════════════════════════
// ROUTE 2 — LOGIN
// Admin logs in and gets JWT token
// URL: POST http://localhost:5000/api/auth/login
// ════════════════════════════════════════════

router.post('/login', async (req, res) => {
  try {

    // Get username and password from request body
    const { username, password } = req.body;

    // Check both fields are provided
    if (!username || !password) {
      return res.status(400).json({
        message: 'Username and password are required'
      });
    }

    // Search MongoDB for admin with this username
    const admin = await Admin.findOne({ username });

    // If no admin found with that username
    if (!admin) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    // Compare typed password with encrypted one in MongoDB
    // bcrypt.compare returns true or false
    const isMatch = await bcrypt.compare(password, admin.password);

    // If password does not match
    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    // Password correct — create JWT token
    const token = jwt.sign(
      {
        id:       admin._id,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Send token to frontend
    res.json({
      token,
      username: admin.username,
      message: 'Login successful'
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;