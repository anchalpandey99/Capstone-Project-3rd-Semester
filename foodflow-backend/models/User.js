const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  label: String,
  addressLine: String,
  city: String,
  pincode: String
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  phone: String,
  role: { type: String, enum: ['customer','vendor','delivery','admin'], default: 'customer' },
  addresses: [AddressSchema],
  favorites: [{ type: Number }],
  loyaltyPoints: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
