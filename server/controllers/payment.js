const Payment = require('../models/Payment');
const stripe = require('../utils/stripe');
const asyncHandler = require('express-async-handler');

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
    const payments = await Payment.find({ customerId: req.params.id });
    res.send(payments);
});
    

// @route POST /payments/:paymentid/pay
// @desc Make a payment for the service
// @access Private
exports.registerUser = asyncHandler(async (req, res, next) => {
    const { rate, hoursOfService, totalPayment } = req.body;
    const customerIdExists = await Payment.findOne({ customerId });
  
    if (customerIdExists) {
      res.status(400);
      throw new Error("This session has been already paid for");
    }
    const payment = await Payment.create({
      userId,
      sitterId, 
      rate,
      hoursOfService,
      totalPayment,
      customerId
    });

    const token = generateToken(payment._id);
    const secondsInWeek = 604800;
  
    res.cookie("token", token, {
    httpOnly: true,
    maxAge: secondsInWeek * 1000
    });
  
    res.status(201).json({
    success: {
        user: {
        id: payment._id,
        userId: payment.userId,
        sitterId: payment.sitterId,
        rate: payment.rate,
        hoursOfService: payment.hoursOfService,
        totalPayment: payment.totalPayment,
        customerId: payment.customerId
        }
    }
    });
});

// @route PUT /payments/:paymentid/cancel
// @desc Cancels a payment intent (only for the merchant)
// @access Private
exports.cancelPayment = asyncHandler(async (req, res, next) => {
    const payment = await PaymentfindOne({ customerId: req.params.id });
  
    if (!payment) {
      res.status(404);
      throw new Error("Payment does not exist");
    }
    payment.set(req.body);
    const canceledPayment = await payment('Payment').deleteOne({payment: customerId});
    res.status(200).json({
      success: {
        payment: canceledPayment,
      },
    });
  });
  