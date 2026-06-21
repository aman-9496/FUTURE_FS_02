// backed/server.js

const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config({
  path: require('path').resolve(__dirname, '.env')
});

const app = express();

// ── Middleware ──────────────────────────────
app.use(cors());
app.use(express.json());

// ── Database Connection ─────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('MongoDB Error:', err));

// ── Import Routes ───────────────────────────
const authRouter  = require('./routes/auth');
const leadsRouter = require('./routes/lead');

// ── Import Middleware ────────────────────────
const protect = require('./middleware/auth');

// ── Use Routes ──────────────────────────────

// Auth routes — public (no token needed)
app.use('/api/auth', authRouter);

// Leads routes — mixed protection
app.use('/api/leads', leadsRouter);

const path = require('path');

// ── Serve Frontend in Production ────────────
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// ── Start Server ────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});