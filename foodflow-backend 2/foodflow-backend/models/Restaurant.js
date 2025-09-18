const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: String,
  price: Number,
  description: String,
  category: String,
  isVeg: Boolean,
  isPopular: Boolean
});

const RestaurantSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  cuisine: String,
  rating: Number,
  deliveryTime: String,
  deliveryFee: Number,
  image: String,
  distance: Number,
  popularity: Number,
  hasOffers: Boolean,
  isVeg: Boolean,
  isFastDelivery: Boolean,
  tags: [String],
  menu: [MenuItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', RestaurantSchema);
