const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { createReview, getallreviewsforSitter } = require('../controllers/review');

router.route('/reviews').get(protect, getallreviewsforSitter);

router.route('/create').post(protect, create);

module.exports = router;
