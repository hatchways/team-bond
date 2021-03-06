const Review = require('../models/review');
const asyncHandler = require('express-async-handler');

exports.createReview = asyncHandler(async (req, res, next) => {
  const review = await Review.create({
    userId: req.params.id,
    sitterId: req.body.sitterId,
    rating: req.body.rating,
    review: req.body.description,
  });
  if (!review) {
    res.status(500);
    throw new Error('invalid or missing review data');
  }
  res.status(201).json({
    success: {
      review,
    },
  });
});

exports.getAllReviewsForSitter = asyncHandler(async (req, res, next) => {
  const reviews = Review.find({
    sitterId: req.body.sitterId,
  });
  res.send(reviews);
});
