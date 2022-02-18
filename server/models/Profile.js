const mongoose = require('mongoose');
const options = { discriminatorKey: 'kind' };

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    address: {
      type: String,
      default: '',
    },
    telephone: {
      type: String,
      default: '',
    },
    birthday: {
      type: Date,
      default: null,
    },
    photo: {
      type: String,
      default: '',
    },
  },
  options
);

module.exports = Profile = mongoose.model('Profile', profileSchema);
