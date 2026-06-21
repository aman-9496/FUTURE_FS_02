const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const protect = require('../middleware/auth');

const { body, validationResult } = require('express-validator');

// PUBLIC — customer submits form (no token needed)
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required').trim().escape(),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('source').optional().trim().escape(),
    body('notes').optional().trim().escape(),
    body('status').optional().isIn(['new', 'contacted', 'converted']).withMessage('Invalid status')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const lead = await Lead.create(req.body);
      res.status(201).json(lead);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

// PROTECTED — admin only below this point

// Get all leads
router.get('/', protect, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single lead
router.get('/:id', protect, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update lead
router.put('/:id', protect, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete lead
router.delete('/:id', protect, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
