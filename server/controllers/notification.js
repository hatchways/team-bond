const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");

exports.createNotification = asyncHandler(async (req, res, next) => {
  const notification = await Notification.create(req.body);
  if (!notification) {
    throw new Error("Notification data invalid");
  }
  res.status(200).send(notification);
});

exports.markAsRead = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ read: false });
  const allNotificationsRead = notifications.map((notification) => {
    notification.updateOne({ read: true });
  });
  res.json({ message: 'All messages marked as read', allNotificationsRead });
});

exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({});
  res.send(notifications);
});

exports.getAllUnreadNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ read: false });
  res.send(notifications);
});
