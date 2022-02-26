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
  const charge = await stripe.charges.create({
    amount: payment.totalPayment,
    currency: CURRENCY,
    customer: payment.customerId,
  });
  return charge;
};

exports.creatPaymentMethod = async (cardDetails) => {
  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: cardDetails.number,
      exp_month: cardDetails.expMonth,
      exp_year: cardDetails.expYear,
      cvc: cardDetails.cvc,
    },
  });
  return paymentMethod;
};

exports.retrievePaymentMethod = async (id) => {
  const paymentMethod = await stripe.paymentMethods.retrieve(id);
  return paymentMethod;
};

exports.updatePaymentMethod = async (body) => {
  const metaData = body.metaData;
  const paymentMethod = await stripe.paymentMethods.update(
    body.id,
    { metadata: { metadata } }
  );
};