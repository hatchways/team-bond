const stripe = require('../utils/stripe');
const asyncHandler = require("express-async-handler");


// @route POST /payment_methods
// @desc create payment method
// @access Public
exports.createPaymentMethod = asyncHandler(async (req, res, next) => {
  paymentMethod = stripe.createPaymentMethod(req.body);
  if (!paymentMethod) throw new Error("PaymentMethod not created");
  res.json({ message: 'Payment Method Created', paymentMethod });
});

// @route GET /payment_methods/retrieve
// @desc edit retrieve payment method
// @access Public
exports.retrievePaymentMethod = asyncHandler(async (req, res, next) => {
  const id = req.body.id;
  const paymentMethod = await stripe.retrievePaymentMethod(id);
  res.send(paymentMethod);
});


// @route PUT /payment_methods/update
// @desc edit payment method
// @access Public
exports.updatePaymentMethod = asyncHandler(async (req, res, next) => {
  const paymentMethod = await stripe.updatePaymentMethod(req.body);
  res.json({ message: 'Payment method updated', paymentMethod });
});


