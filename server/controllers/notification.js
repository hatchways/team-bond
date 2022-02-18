const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");

exports.createNotification = asyncHandler(async (req, res, next) => {
  const type = req.body.type;


});

