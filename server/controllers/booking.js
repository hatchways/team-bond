const Booking = require('../models/Booking');
const Payment = require('../models/Payment');
const stripe = require('../utils/stripe');
const asyncHandler = require('express-async-handler');

// @route GET /bookings
// @desc get all bookings of the sitter who is logged in
exports.getAllBookings = asyncHandler(async (req, res, next) => {
  const bookings = await Booking.find({ sitterId: req.params.id });
  res.send(bookings);
});

// @route POST /booking/book:id
// @desc create a new booking
exports.createBooking = asyncHandler(async (req, res, next) => {
  const stripCustomer = null;
  const bookings = await Booking.find({ userId: req.params.id, sitterId: req.body.userId });
  if (bookings) {
    bookings.map(async (booking) => {
      if (booking.start === req.body.start || booking.end === req.body.end) {
        res.status(500);
        throw new Error('you already have a booking the coincides with this one');
      }
      const customer = await stripe.customers.retrieve(booking.customerId);
      if (!customer) {
        stripCustomer = await stripe.createStripeCustomer(booking);
      } else stripCustomer = customer;
    });
  }
  const bookingInfo = { ...req.body, userId: req.params.id };
  stripCustomer ? { ...bookingInfo, customerId: stripCustomer.id } : null;
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

// @route PUT /booking/acceptOrDecline:id
// @desc updates booking to accepted or declined by sitter
exports.acceptOrDecline = asyncHandler(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    res.status(500);
    throw new Error('No booking found');
  }
  const hoursOfService = () => {
    const startDate = new Date(booking.start);
    const endDate = new Date(booking.end);
    const diff = Math.abs(startDate - endDate);
    const hours = diff / 36e5;
    return hours;
  };
  const updatedBooking = booking.updateOne(req.body);
  if (updatedBooking.accepted) {
    const payment = await Payment.create({
      userId: updatedBooking.userId,
      sitterId: updatedBooking.sitterId,
      rate: updatedBooking.rate,
      hoursOfService: hoursOfService(),
      customerId: booking.customerId
    });
    const charge = await stripe.chargeCustomer(payment);

    res.json({ message: 'Booking accepted', updatedBooking, charge });
  } else {
    res.json({ message: 'Booking declined', updatedBooking });
  };

});

// @route PUT /booking/update:id
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