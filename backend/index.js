require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

// Initialize App
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON bodies

// Connect to Database
// The server will wait for DB connection before handling requests
connectDB();

// Basic Health Check Route (DevOps Best Practice: Liveness Probe)
app.get('/health', (req, res) => {
  res.json({ status: 'UP', service: 'backend', db: 'connected' });
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});