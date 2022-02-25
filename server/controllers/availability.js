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

  // validate at least one day passed as filter
  if (!queryHasAvailabilities) {
    res.status(400);
    throw new Error("Availability required in query string");
  }

  const customerSpec = {};
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];

  // build spec
  days.forEach((day) => {
    if (query.hasOwnProperty(day)) {
      customerSpec[`${day}.from`] = { $lte: query[day].from };
      customerSpec[`${day}.to`] = { $gte: query[day].to };
    }
  });

  const availableSitters = await Availability.find({
    active: true,
    ...customerSpec,
  });

  res.status(200).json({
    success: {
      data: availableSitters ?? []
    }
  });
});

// @route POST /availability/{sitterId}
// @access Private
exports.createAvailability = asyncHandler(async (req, res, next) => {
  const countActive = await Availability.count({ sitterId: req.params.sitterId , active: true });
  if (countActive >= 1 && req.body.active) {
    res.status(400);
    throw new Error(
      "More than one active availability records not allowed. Disable other availability records before proceeding"
    );
  }

  const availability = await Availability.create({ ...req.body, sitterId: req.params.sitterId });
  res.status(201).json({ success: { availability } });
});


// @route PUT /availability/{recordId}
// @access Private
exports.updateAvailability = asyncHandler(async (req, res, next) => {
  const existing = await Availability.count({ _id: req.params.recordId });
  if (existing == 0) {
    res.status(404);
    throw new Error(`Not found`);
  }

  const countActive = await Availability.count({ sitterId: req.body.sitterId , active: true });
  if (countActive >= 1  && req.body.active) {
    res.status(400);
    throw new Error(
      "More than one active availability record not allowed. Disable other availability records before proceeding"
    );
  }

  const updated = await Availability.findByIdAndUpdate(
    req.params.recordId,
    { ...req.body },
    { new: true },
  );
  res.status(200).json({ success: { availability: updated } });
});

// @route DELETE /availability/{recordId}
// @access Private
exports.deleteAvailability = asyncHandler(async (req, res, next) => {
  const existing = await Availability.count({ _id: req.params.recordId });
  if (existing == 0) {
    res.status(404);
    throw new Error(`Not found`);
  }

  const updated = await Availability.findOneAndDelete(req.params.recordId);
  res.status(201).send();
});
