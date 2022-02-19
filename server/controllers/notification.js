const asyncHandler = require('express-async-handler');
const Notification = require('notification');

// @route POST /notification/create
// @desc create notification
// @access Public
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

// @route PUT /notification/markAsRead
// @desc mark unread notification as read
// @access Public
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

// @route GET /notification/getAll
// @desc get all notifications
// @access Public
exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ $or: [{ recipient: req.params.id }, { userId: req.params.id }] });
  res.send(notifications);
});

// @route GET /notification/getAllUnread
// @desc get all unread notifications
// @access Public
exports.getAllUnreadNotifications = asyncHandler(async (req, res, next) => {
  const unreadNotifications = await Notification.find({ $or: [{ recipient: req.params.id }, { userId: req.params.id }], read: false });
  res.send(unreadNotifications);
});