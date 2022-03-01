const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { createReview, getAllReviewsForSitter } = require('../controllers/review');

router.route('/reviews').get(protect, getAllReviewsForSitter);

router.route('/create:id').post(protect, createReview);

module.exports = router;
