const mongoose = require('mongoose');

const reviewSchema = new mongoose({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Sitter',
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
