const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  getAllBookings,
  createBooking,
  acceptOrDecline,
  updateBooking,
} = require('../controllers/booking');

router.route('./:id').get(protect, getAllBookings);
router.route('./book:id').post(protect, createBooking);
router.route('./acceptOrDecline:id').put(protect, acceptOrDecline);
router.route('./update:id').put(protect, updateBooking);

module.exports = router;
