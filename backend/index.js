require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
// NEW: Import the route file
const userRoutes = require('./routes/userRoutes'); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/health', (req, res) => {
  res.json({ status: 'UP', service: 'backend', db: 'connected' });
});

// NEW: Use the user routes for any request to /api/users
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});