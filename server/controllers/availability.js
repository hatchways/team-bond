const asyncHandler = require('express-async-handler');
const Availability = require('../models/Availability');

// @route GET /availability/?monday[from]={900}&monday[to]={1300}, etc
// @desc Get available sitter list based on required customer availability from query
// @access Private
exports.getAvailableSitters = asyncHandler(async (req, res, next) => {
  const query = { ...req.query };

  const queryHasAvailabilities = query.hasOwnProperty('monday')
    || query.hasOwnProperty('tuesday')
    || query.hasOwnProperty('wednesday')
    || query.hasOwnProperty('thursday')
    || query.hasOwnProperty('friday')
    || query.hasOwnProperty('saturday')
    || query.hasOwnProperty('sunday');

  
  if (!queryHasAvailabilities) {
    res.status(400);
    throw new Error("Availability required in query string");
  }

  const customerSpec = {
    monday: query.monday ?? { from: 0, to: 0 },
    tuesday: query.tuesday ?? { from: 0, to: 0 },
    wednesday: query.wednesday ?? { from: 0, to: 0},
    thursday: query.thursday ?? { from: 0, to: 0 },
    friday: query.friday ?? { from: 0, to: 0 },
    saturday: query.saturday ?? { from: 0, to: 0 },
    sunday: query.sunday ?? { from: 0, to: 0 },
  };

  const availableSitters = await Availability.find({
    'monday.from': { $lte: customerSpec.monday.from },
    'monday.to': { $gte: customerSpec.monday.to },
    'tuesday.from': { $lte: customerSpec.tuesday.from },
    'tuesday.to': { $gte: customerSpec.tuesday.to },
    'wednesday.from': { $lte: customerSpec.wednesday.from },
    'wednesday.to': { $gte: customerSpec.wednesday.to },
    'thursday.from': { $lte: customerSpec.thursday.from },
    'thursday.to': { $gte: customerSpec.thursday.to },
    'friday.from': { $lte: customerSpec.friday.from },
    'friday.to': { $gte: customerSpec.friday.to },
    'saturday.from': { $lte: customerSpec.saturday.from },
    'saturday.to': { $gte: customerSpec.saturday.to },
    'sunday.from': { $lte: customerSpec.sunday.from },
    'sunday.to': { $gte: customerSpec.sunday.to },
  });

  res.status(200).json({
    success: {
      data: availableSitters ?? []
    }
  });
});

// @route POST /availability/{sitterId}
exports.createAvailability = asyncHandler(async (req, res, next) => {
  const countActive = await Availability.count({ sitterId: req.params.sitterId , active: true });
  if (countActive >= 1) {
    res.status(400);
    throw new Error(
      "More than one active availability record not allowed. Disable other availability records before proceeding"
    );
  }

  const availability = await Availability.create({ ...req.body, sitterId: req.params.sitterId });
  res.status(201).json({ success: { availability } });
});
