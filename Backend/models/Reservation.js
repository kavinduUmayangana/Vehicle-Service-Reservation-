const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  vehicle_no: { type: String, required: true },
  mileage: { type: Number, required: true },
  message: { type: String },
  username: { type: String, required: true }
});

module.exports = mongoose.model('Reservation', reservationSchema);
