const stripe = require('stripe')(process.env.STRIPE_SECERT);
const Booking = require('../models/Booking');
const Sitter = require('../models/Sitter');

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
  const sitter = await Sitter.findById(booking.sitterId);
  const startDate = new Date(booking.start);
  const endDate = new Date(booking.end);
  const diff = Math.abs(startDate - endDate);
  const hours = diff / 36e5;
  const amount = (hours * sitter.rate).toFixed(2);
  const CURRENCY = 'usd';
  stripe.charges.create({
    amount: amount + 5,
    currency: CURRENCY,
    customer: id,
  });
};

exports.createProduct = async () => {
  const PRODUCT_NAME = 'Monthly Subscription';
  const PRODUCT_TYPE = 'service';

  const product = await stripe.products.create({
    name: PRODUCT_NAME,
    type: PRODUCT_TYPE,
  });

  console.log(product);
  return product.id;
};
exports.createPlan = async (productId) => {
  const PLAN_NICKNAME = 'Monthly Subscription Plan';
  const PLAN_INTERVAL = 'month';
  const CURRENCY = 'usd';
  const PLAN_PRICE = 350; //just a number until we can decide on a plan number

  const plan = await stripe.plans.create({
    product: productId,
    nickname: PLAN_NICKNAME,
    currency: CURRENCY,
    interval: PLAN_INTERVAL,
    amount: PLAN_PRICE,
  });

  console.log(plan);
  return plan.id;
};

exports.subscribeCustomerToPlan = async (customerId, planId) => {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ plan: planId }],
  });

  console.log(subscription);
  return subscription;
};
