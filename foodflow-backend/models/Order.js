const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  quantity: Number
});

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurantId: { type: Number },
  items: [OrderItemSchema],
  total: Number,
  address: String,
  paymentMethod: { type: String, default: 'cod' },
  status: { type: String, enum: ['confirmed','preparing','ready','out_for_delivery','delivered','cancelled'], default: 'confirmed' },
  estimatedDelivery: Date
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
