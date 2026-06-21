const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    name:   { type: String, required: true, trim: true },
    email:  { type: String, required: true, trim: true },
    source: { type: String, trim: true },
    status: { type: String, default: 'new', enum: ['new', 'contacted', 'converted'] },
    notes:  { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);
