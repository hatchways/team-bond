const stripe = require('stripe')(process.env.STRIPE_SECERT);
const Booking = require('../models/Booking');
const Profile = require('../models/Profile');
const User = require('../models/User');

const booking = Booking.findById(req.params.id);
exports.createStripeCustomer = async () => {
  const user = await User.findById(booking.userId);
  const { name, email } = user;
  const customer = await stripe.create({
    name: name,
    email: email,
  });
  return customer;
};

exports.chargeCustomer = async (id) => {
  const sitterProfile = await Profile.findById(booking.sitterId);
  const startDate = new Date(booking.start);
  const endDate = new Date(booking.end);
  const diff = Math.abs(startDate - endDate);
  const hours = diff / 36e5;
  const amount = (hours * sitterProfile.rate).toFixed(2);
  const processingFee = 5;
  const CURRENCY = 'usd';
  stripe.charges.create({
    amount: amount + processingFee,
    currency: CURRENCY,
    customer: id,
  });
};
