require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const restaurantsRoutes = require('./routes/restaurants');
const ordersRoutes = require('./routes/orders');
const vendorsRoutes = require('./routes/vendors');

const app = express();

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || '*';
app.use(cors({
  origin: FRONTEND_ORIGIN,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));

app.use(express.json());

const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/foodflow').catch(err => {
  console.error('DB connection failed', err);
  process.exit(1);
});

app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/vendors', vendorsRoutes);

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
