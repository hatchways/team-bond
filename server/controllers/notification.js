const asyncHandler = require('express-async-handler');
const Notification = require('notification');

exports.createNotification = asyncHandler(async (req, res, next) => {
  const notificationInfo = {
    ...req.body, userId: req.params.id
  };
  const notification = await Notification.create(notificationInfo);
  if (!notification) {
    res.status(500);
    throw new Error('Invalid profile data');
  }
  res.json({ message: 'notification created', notification });
});

exports.markAsRead = asyncHandler(async (req, res, next) => {
  const unreadNotifications = await Notification.find({ $or: [{ recipient: req.params.id }, { userId: req.params.id }], read: false });
  if (!unreadNotifications.length) {
    res.json({ message: 'no unread notifications ' });
  } else {
    unreadNotifications.forEach(unreadNotification => {
      await unreadNotification.updateOne({ read: true });
      res.json({ message: 'all notifications marked as read ' });
    });
  }
});

exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ $or: [{ recipient: req.params.id }, { userId: req.params.id }] });
  res.send(notifications);
});

exports.getAllUnreadNotifications = asyncHandler(async (req, res, next) => {
  const unreadNotifications = await Notification.find({ $or: [{ recipient: req.params.id }, { userId: req.params.id }], read: false });
  res.send(unreadNotifications);
});