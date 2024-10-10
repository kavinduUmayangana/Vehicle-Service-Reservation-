const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const reservationRoutes = require('./routes/reservation');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Security middleware
app.use(helmet()); // Adds security-related HTTP headers
app.use(mongoSanitize()); // Prevent MongoDB query injection
app.use(xss()); // Prevent cross-site scripting attacks
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON data

// Rate limiting to prevent brute-force or DDoS attacks
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes window
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/reservations', reservationRoutes);

// Basic route for API testing
app.get('/', (req, res) => {
  res.send('Vehicle Service Reservation API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
