const mongoose = require('mongoose');

async function connectDB(uri) {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  // anchalpandey2507@gmail.com
  console.log('MongoDB connected');
}

module.exports = connectDB;
