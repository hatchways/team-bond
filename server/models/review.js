const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Profile',
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: false,
  },
});

module.exports = Review = mongoose.model('Review', reviewSchema);
