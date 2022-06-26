const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const {
    getActiveSchedules,
    getScheduleById,
    getAllSchedulesForLoggedInUser,
    activateSchedule
} = require("../controllers/schedule");

router.route("/").get(protect, getAllSchedulesForLoggedInUser);
router.route("/active").get(protect, getActiveSchedules);
router.route("/:scheduleId").get(protect, getScheduleById)
router.route("/:scheduleId/activate").patch(protect, activateSchedule);

module.exports = router;