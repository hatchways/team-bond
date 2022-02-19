const express = require("express");
const router = express.Router();
const { getAllNotifications,
  getAllUnreadNotifications,
  createNotification,
  markAsRead } = require("../controllers/notification");

router.route('/create').post(createNotification);
router.route('/getAll').get(getAllNotifications);
router.route('/getAllUnread').get(getAllUnreadNotifications);
router.route('/markAsRead').put(markAsRead);

module.exports = router;
