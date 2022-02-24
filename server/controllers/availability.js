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
    || query.hasOwnProperty('friday');

  
  if (!queryHasAvailabilities) {
    res.status(400);
    throw new Error("Availability required in query string");
  }

  const specTime = {
    monday: query.monday ?? { from: 0, to: 0 },
    tuesday: query.tuesday ?? { from: 0, to: 0 },
    wednesday: query.wednesday ?? { from: 0, to: 0},
    thursday: query.thursday ?? { from: 0, to: 0 },
    friday: query.friday ?? { from: 0, to: 0 },
    saturday: query.saturday ?? { from: 0, to: 0 },
    sunday: query.sunday ?? { from: 0, to: 0 },
  };

  const availableSitters = await Availability.find({
    'monday.from': { $lte: specTime.monday.from },
    'monday.to': { $gte: specTime.monday.to },
    //
    'tuesday.from': { $lte: specTime.tuesday.from },
    'tuesday.to': { $gte: specTime.tuesday.to },
    //
    'wednesday.from': { $lte: specTime.wednesday.from },
    'wednesday.to': { $gte: specTime.wednesday.to },
    //
    'thursday.from': { $lte: specTime.thursday.from },
    'thursday.to': { $gte: specTime.thursday.to },
    //
    'friday.from': { $lte: specTime.friday.from },
    'friday.to': { $gte: specTime.friday.to },
    //
    'saturday.from': { $lte: specTime.saturday.from },
    'saturday.to': { $gte: specTime.saturday.to },
    //
    'sunday.from': { $lte: specTime.sunday.from },
    'sunday.to': { $gte: specTime.sunday.to },
  });

  res.status(200).json({
    success: {
      data: availableSitters ?? []
    }
  });
});

// @route POST /availability/{sitterId}
exports.createAvailability = asyncHandler(async (req, res, next) => {
  // ! TODO: validate only one active avail.
  const availability = await Availability.create({ sitterId: req.params.sitterId, ...req.body });
  res.status(201).json({ success: { availability } });
});
