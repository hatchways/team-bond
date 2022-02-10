const mongoose = require('mongoose');
const profileSechma = require('./Profile');

const Profile = mongoose.model(Profile, profileSechma);
const options = { discriminatorKey: 'kind' };

const Sitter = Profile.discriminator(
  'Sitter',
  new mongoose.schema({
    stripeConnectId: {
      type: String,
      required: true,
    },
    availabilityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    activeScheduleId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    requests: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Request',
    },
    rate: {
      type: Number,
      get: dollarToCents,
    },
  })
);

const dollarToCents = (rate) => rate * 100;
