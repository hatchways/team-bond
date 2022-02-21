const express = require("express");
const router = express.Router();
const { getAllNotifications,
  getAllUnreadNotifications,
  createNotification,
  markAsRead } = require("../controllers/notification");

router.route('/create:id').post(createNotification);
router.route('/getAll:id').get(getAllNotifications);
router.route('/getAllUnread:id').get(getAllUnreadNotifications);
router.route('/markAsRead:id').put(markAsRead);

module.exports = router;
