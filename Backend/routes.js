
const express = require('express');
const Reservation = require('../models/Reservation');
const authMiddleware = require('../middleware/authMiddleware'); 

const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req, res) => {
  const { username, date, time, location, vehicle_no, mileage, message } = req.body;
  try {
    const newReservation = new Reservation({ username, date, time, location, vehicle_no, mileage, message });
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: 'Error saving reservation' });
  }
});

router.get('/', async (req, res) => {
  const { username } = req.user; 
  try {
    const reservations = await Reservation.find({ username });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching reservations' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { username } = req.user;
  try {
    const reservation = await Reservation.findOneAndDelete({ _id: id, username });
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found or unauthorized' });
    }
    res.json({ message: 'Reservation deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting reservation' });
  }
});

module.exports = router;
