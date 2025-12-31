const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salary: { 
    amount: { type: Number, default: 0 },
    frequency: { type: String, enum: ['MONTHLY', 'WEEKLY'], default: 'MONTHLY' }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);