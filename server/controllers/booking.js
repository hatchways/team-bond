const Booking = require('../models/Booking');
const asyncHandler = require('express-async-handler');

// @route GET /bookings
// @desc get all bookings of the sitter who is logged in
exports.getAllBookings = asyncHandler(async (req, res, next) => {
  const bookings = await Booking.find({ sitterId: req.params.id });
  res.send(bookings);
});

// @route POST /booking/book
// @desc create a new booking
exports.createBooking = asyncHandler(async (req, res, next) => {
  const bookings = await Booking.find({ userId: req.params.id, sitterId: req.body.sitterId });
  if (bookings) {
    bookings.map((booking) => {
      if (booking.start === req.body.start || booking.end === req.body.end) {
        res.status(500);
        throw new Error('you already have a booking the coincides with this one');
      }
    });
  }
  const bookingInfo = { ...req.body, userId: req.params.id };
  const booking = await Booking.create(bookingInfo);
  if (!booking) {
    res.status(500);
    throw new Error('Invalid booking data');
  }
  res.status(201).json({
    success: {
      booking,
    },
  });
});

// @route PUT /booking/acceptOrDecline
// @desc updates booking to accepted or declined by sitter
exports.acceptOrDecline = asyncHandler(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    res.status(500);
    throw new Error('No profile found');
  }
  const updatedBooking = booking.updateOne(req.body);
  updatedBooking.accepted
    ? res.json({ message: 'Booking accepted', updatedBooking })
    : res.json({ message: 'Booking declined', updatedBooking });
});

// @route PUT /booking/update
// @desc update booking by client and reset the updated booking to pending
exports.updateBooking = asyncHandler(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    res.status(500);
    throw new Error('No profile found');
  }
  const updatedBookingInfo = { ...req.body, accepted: false, declined: false };
  const updatedBooking = booking.updateOne(updatedBookingInfo);
  res.status(201).json({
    success: {
      updatedBooking,
    },
    message: 'Booking successfully update but still needs approval of the sitter',
  });
});

