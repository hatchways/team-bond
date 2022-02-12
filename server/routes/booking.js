const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  getAllBookings,
  createBooking,
  acceptOrDecline,
  updateBooking,
} = require('../controllers/booking');

router.route('./bookings').get(protect, getAllBookings);
router.route('./book').post(protect, createBooking);
router.route('./acceptOrDecline').put(protect, acceptOrDecline);
router.route('./update').put(protect, updateBooking);

module.exports = router;
