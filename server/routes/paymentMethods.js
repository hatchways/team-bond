const express = require('express');
const router = express.Router();
const { createPaymentMethod, updatePaymentMethod, retrievePaymentMethod } = require('../utils/stripe');

router.route('./').post(createPaymentMethod);
router.route('./retrieve').get(retrievePaymentMethod);
router.route('./update').put(updatePaymentMethod);

module.exports = router;
