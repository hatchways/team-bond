const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
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

  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
    min: this.start,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  declined: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  pending: {
    type: Boolean,
    default: true,
  },
});


//Request is a constructor so I cant use it
module.exports = Booking = mongoose.model('Booking', bookingSchema);

const isPending = () => {
  !this.accepted && !this.declined ? true : false;
};

Booking.pending = isPending();
