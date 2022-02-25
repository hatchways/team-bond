const mongoose = require('mongoose');

/**
 * Minimum allowed minutes
 */
const MINIMUM = 0;

/**
 * Maximum allowed minutes (24 hours - 1 minute)
 */
const MAXIMUM = 1439;

const availabilitySchema = new mongoose.Schema({
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  active: {
    type: Boolean,
    default: false,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  monday: {
    from: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    },
    to: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    }
  },
  tuesday: {
    from: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    },
    to: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    }
  },
  wednesday: {
    from: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    },
    to: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    }
  },
  thursday: {
    from: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    },
    to: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    }
  },
  friday: {
    from: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    },
    to: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    }
  },
  saturday: {
    from: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    },
    to: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    }
  },
  sunday: {
    from: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    },
    to: {
      type: Number, // minutes
      min: MINIMUM,
      max: MAXIMUM,
      default: 0
    }
  },
});


module.exports = Availability = mongoose.model("availability", availabilitySchema)
