const asyncHandler = require('express-async-handler');
const Availability = require('../models/Availability');

// @route POST /availability/{sitterId}
// @access Private
exports.createAvailability = asyncHandler(async (req, res, next) => {
  const loggedInUser = req.user.id ?? false;

  if (!loggedInUser) {
    res.status(500);
    throw new Error("Error finding user");
  }

  const availability = await Availability.create({ ...req.body, sitterId: loggedInUser });
  res.status(201).json({ success: { availability } });
});

// @route GET /availability/{recordId}
// @access Private
exports.getAvailability = asyncHandler(async (req, res, next) => {
  const existing = await Availability.count({ _id: req.params.recordId });
  if (existing == 0) {
    res.status(404);
    throw new Error(`Not found`);
  }

  const found = await Availability.findById(req.params.recordId);

  res.status(200).json({ success: { availability: found } });
});


// @route PUT /availability/{recordId}
// @access Private
exports.updateAvailability = asyncHandler(async (req, res, next) => {
  const existing = await Availability.count({ _id: req.params.recordId });
  if (existing == 0) {
    res.status(404);
    throw new Error(`Not found`);
  }

  const loggedInUser = req.user.id ?? false;

  if (!loggedInUser) {
    res.status(500);
    throw new Error("Error finding user");
  }

  const updated = await Availability.findByIdAndUpdate(
    req.params.recordId,
    { ...req.body, sitterId: loggedInUser },
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
