const Availability = require("../models/Availability");
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");


// @route GET /availability/schedule/:scheduledId

exports.getScheduleById = asyncHandler(async, (req, res, next) => {
    const scheduleId = req.params.scheduleId;
    const schedule = await Availability.findById(scheduleId);
    
    if(schedule) {
        return res.status(200).send({ success: schedule});
    } else {
        res.status(404);
        throw new Error("Schedule don't exist!");
    }
});

// @route GET /availability/active

exports.getActiveSchedules = asyncHandler(async (req, res, next) => {
    const schedule = await Availability.findOne()
        .where('active')
        .equals(true);

    if(schedule.length) {
        return res.status(200).send({ success: schedule});
    } else {
        res.status(404);
        throw new Error("There is not active schedule");
    }
});

// @route GET /availability/schedule

exports.getAllSchedulesForLoggedInUser = asyncHandler(async (req, res, next) => {
    const schedule = await Availability.find();

    if(schedule.length) {
        return res.status(200).send({ success: schedule});
    } else {
        res.status(404);
        throw new Error("No schedules found");
    }
});

// @route UPDATE /availability/:scheduleId/activate

exports.activateSchedule = asyncHandler(async (req, res, next) => {
     const scheduleId = req.params.scheduleId;
     const userId = req.user.id;

     const profiles = await Profile.find({ userId });
     const profileId = profiles[0]._id;

     const activeSchedule = await Availability.findOne()
        .where("active")
        .equals(true);

     if(activeSchedule) {
         activeSchedule.set({ active: false});
         await activeSchedule.save();
     }

     const schedule = await Availability.findOne({ _id: scheduleId });
     if (schedule) {
         schedule.set({ isActive: true});
         await schedule.save();

        const profile = await Profile.findOne({ _id: profileId });
        profile.set({ activeSchedule: schedule._id });

        const updatedProfile = await profile.save();

        return res.status(200).send({
            success: {
                profile: updatedProfile,
            },
        });
     } else {
         res.status(404);
         throw new Error("No schedules found");
     }
});


