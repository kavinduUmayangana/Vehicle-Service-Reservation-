const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const authMiddleware = require('../middleware/auth'); // Authentication middleware

// Get all reservations for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
    const reservations = await Reservation.find({ username: req.user.username });
    res.json(reservations);
});

// Create new reservation
router.post('/', authMiddleware, async (req, res) => {
    const { date, time, location, vehicle_no, mileage, message } = req.body;
    const newReservation = new Reservation({ date, time, location, vehicle_no, mileage, message, username: req.user.username });
    await newReservation.save();
    res.status(201).json(newReservation);
});

// Delete reservation
router.delete('/:id', authMiddleware, async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);
    if (reservation.username !== req.user.username) {
        return res.status(403).json({ error: 'Unauthorized' });
    }
    await reservation.remove();
    res.json({ message: 'Reservation deleted' });
});

module.exports = router;
