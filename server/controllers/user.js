const asyncHandler = require("express-async-handler");
const Profile = require('../models/Profile');
const mongoose = require('mongoose');

// @route GET /availability/?monday[from]={900}&monday[to]={1300}, etc
// @desc Get available profiles list based on required customer availability from query
// @access Private
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const query = req.query;

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

  // available sitters
  const availableSitters = await Availability.find({
    active: true,
    ...customerSpec,
  });

  let sitterIds = [];
  availableSitters.forEach((item) => {
    sitterIds.push(mongoose.Types.ObjectId(item.sitterId));
  });

  // get their profiles
  const matchingProfiles = await Profile.find({
    userId: {
      $in: sitterIds
    }
  });

  res.status(200).json({
    success: {
      data: matchingProfiles ?? []
    }
  });
});
