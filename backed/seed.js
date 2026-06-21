// backed/seed.js
// Run once: node seed.js
// Creates admin account: username=admin, password=admin123

require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });

const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const Admin    = require('./models/admin');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected');

  // Remove any existing admin
  await Admin.deleteMany({});

  const hashed = await bcrypt.hash('admin123', 10);
  await Admin.create({ username: 'admin', password: hashed });

  console.log('✅ Admin created — username: admin  password: admin123');
  await mongoose.disconnect();
}

seed().catch(err => { console.error(err); process.exit(1); });
