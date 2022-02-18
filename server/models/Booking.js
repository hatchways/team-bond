const mongoose = require('mongoose');

const bookingSchema = new mongoose({
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
    set: isPending,
  },
});

const isPending = (accepted, declined) => {
  !accepted && !declined ? true : false;
};

//Request is a constructor so I cant use it
module.exports = Bookings = mongoose.model('Bookings', profileSchema);
