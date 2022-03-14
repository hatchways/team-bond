const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {getAllPayments, getPayment, makePayment, cancelPayment} = require('../controllers/payment');


router.route('/payments').get(protect, getAllPayments);
router.route('/payments/:paymentid').get(protect, getPayment);
router.route('/payments/:paymentid/pay').post(protect, makePayment);
router.route('/payments/:paymentid/cancel').put(protect, cancelPayment);

module.exports = router;
