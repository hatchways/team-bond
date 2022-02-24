const mongoose = require('mongoose');

const MIN = 0;
const MAX = 2359;

const time = new mongoose.Schema({
  hour: {
    type: Number,
    min: 0,
    max: 23
  },
  minute: {
    type: Number,
    min: 0,
    max: 60,
    default: 0
  },
})

const range = new mongoose.Schema({
  from: {
    type: Number,
    min: 0,
    max: 2359,
    default: 0
  },
  to: {
    type: Number,
    min: 0,
    max: 2359,
    default: 0
  }
});

const availabilitySchema = new mongoose.Schema({
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  active: {
    type: Boolean,
    default: false
  },
  monday: {
    from: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    },
    to: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    }
  },
  tuesday: {
    from: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    },
    to: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    }
  },
  wednesday: {
    from: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    },
    to: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    }
  },
  thursday: {
    from: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    },
    to: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    }
  },
  friday: {
    from: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    },
    to: {
      type: Number,
      min: 0,
      max: 2359,
      default: 0
    }
  },
});


module.exports = Availability = mongoose.model("availability", availabilitySchema)
