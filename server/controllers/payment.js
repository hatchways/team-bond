const Payment = require("../models/Payment");
const stripe = require("../utils/stripe");
const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(
  "sk_test_51KcFwoAZ9gJcnOgDUNatBvPLDR4J7tfHodr55G24tP3UZgO3nyWtvE272SaqYqNHtpf22UTCUX2hDM9s0XXW4W5X0064ASBu8x"
);

// @route GET /payment
// @desc Get all payments for the signed user
// @access Private
exports.getAllPayments = asyncHandler(async (req, res, next) => {
  const payments = await Payment.find({ userId: req.params.id });
  res.send(payments);
});

// @route GET /payments/:paymentid
// @desc Get a payment
// @access Private
exports.getAllPayments = asyncHandler(async (req, res, next) => {
  const charge = await stripe.charges.retrieve("ch_3KcGB2AZ9gJcnOgD3mFC1zrY");
  res.send(charge);
});

// @route POST /payments/:paymentid/pay
// @desc Make a payment for the service
// @access Private
exports.makePayment = asyncHandler(async (req, res, next) => {
  const { userId, sitterId, rate, hoursOfService, customerId } = req.body;
  const charge = await stripe.charges.create({
    amount: 10000,
    currency: "usd",
    source: "given_from_frontend",
    desciption: "Test Charge",
    customer: customerId,
  });
  const payment = await Payment.create({
    userId,
    sitterId,
    rate,
    hoursOfService,
    totalPayment: charge.amount,
    customerId: charge.customer,
  });
  res.send(payment);
});

// @route PUT /payments/:paymentid/cancel
// @desc Cancels a payment intent (only for the merchant)
// @access Private
exports.cancelPayment = asyncHandler(async (req, res, next) => {
  const charge = await stripe.charges.retrieve("ch_3KcGB2AZ9gJcnOgD3mFC1zrY");
  res.send("Payment " + charge.id + " has been cancelled");
});
