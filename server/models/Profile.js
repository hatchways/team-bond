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
const Profile = mongoose.model('Profile', profileSchema);

const sitterSchema = Profile.discriminator(
  'Sitter',
  new mongoose.Schema({
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
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: 'Request',
    },
    rate: {
      type: Number,
      required: true,
    },
  }),
  options
);


const dollarToCents = () => this.rate * 100;

Profile.rate = dollarToCents();

module.exports = Profile;