const stripe = require('stripe')(process.env.STRIPE_SECERT);
const Profile = require('../models/Profile');
const User = require('../models/User');


exports.createStripeCustomer = async (booking) => {
  const user = await User.findById(booking.userId);
  const { name, email } = user;
  const customer = await stripe.create({
    name: name,
    email: email,
  });
  return customer;
};

exports.chargeCustomer = async (payment) => {
  stripe.charges.create({
    amount: payment.totalPayment,
    currency: CURRENCY,
    customer: payment.customerId,
  });
};

exports.creatPaymentMethod = async (cardDetails) => {
  await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: cardDetails.number,
      exp_month: cardDetails.expMonth,
      exp_year: cardDetails.expYear,
      cvc: cardDetails.cvc,
    },
  });
};
