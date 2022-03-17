const stripe = require('stripe')(process.env.STRIPE_SECERT);
const Profile = require('../models/Profile');
const Payment = require('../models/Payment');
const { retrievePaymentMethod } = require('./stripe');

exports.createConnectAccount = async (email) => {
  const account = await stripe.accounts.create({
    country: 'US',
    email: email,
    type: 'express',
    capabilities: {
      card_payments: { requested: true },
    },
    business_type: 'individual',
    business_profile: { url: 'http://localhost:3000' },
  });
  return account;
};

exports.createAccountLinks = async (account) => {
  const accountLink = await stripe.accountLinks.create({
    account: account,
    refresh_url: 'http://localhost:3000/dashboard',
    return_url: 'http://localhost:3000/dashboard',
    type: 'account_onboarding',
  });
};

exports.retrieveConnectAccount = async (id) => {
  const profile = await Profile.findOne({ userId: id });
  profile.stripeConnectId ? await stripe.accounts.retrieve(profile.stripeConnectId) : null;
};

exports.updateConnectAccount = async (id, metadata) => {
  const account = await retrieveConnectAccount(id);
  account ? await stripe.accounts.update(
    account.id,
    { metadata: metadata }
  ) : null;

};

exports.createPaymentIntent = async (id) => {
  const payment = await Payment.fineOne({ sitterId: id });
  const profile = await Profile.findOne({ userId: id });
  payment && profile ? await stripe.paymentIntents.create({
    amount: payment.totalPayment,
    currency: 'usd',
    application_fee_amount: 5,
    payment_method_types: ['card'],
  }, {
    stripeAccount: profile.stripeConnectId,

  }) : null;
};
exports.confirmPaymentIntent = async (id) => {
  const paymentIntent = await createPaymentIntent(id);
  const payment = await Payment.fineOne({ sitterId: id });
  const paymentMethod = await retrievePaymentMethod(payment.userId);
  const confirm = await stripe.paymentIntents.confirm(
    paymentIntent.id,
    { payment_method: paymentMethod }
  );
  return confirm;
};



