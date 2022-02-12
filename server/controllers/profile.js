const Profile = require('../models/Profile');
const asyncHandler = require('express-async-handler');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

// @route POST /profile//uploadPicture
// @desc upload user profile picutre
exports.uploadPicture = asyncHandler(upload.single('image'), async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  const profile = await Profile.findById({ porfileId: req.profile.id });
  if (profile) {
    const updatedProfile = await profile.updateOne({
      $set: {
        photo: result.secure_url,
        cloudinary_id: result.public_id,
      },
    });
    res.status(200);
    res.json({ message: 'Picture uploaded', updatedProfile });
  } else {
    res.status(404);
    throw new Error('No profile found');
  }
});

// @route POST /profile//deletePicture
// @desc delete user profile picutre
exports.deletePicture = asyncHandler(async (req, res, next) => {
  let profile = await Profile.findById({ porfileId: req.profile.id });
  if (profile) {
    await cloudinary.uploader.destroy(profile.cloudinary_id);
    const updatedProfile = await profile.updateOne({
      $set: {
        photo: '',
        cloudinary_id: '',
      },
    });
    res.json(updatedProfile);
  } else {
    res.status(404);
    throw new Error('No profile found');
  }
});

exports.updatePicture = asyncHandler(upload.single('image'), async (req, res, next) => {
  let profile = await Profile.findById({ porfileId: req.profile.id });
  if (profile) {
    await cloudinary.uploader.destroy(profile.cloudinary_id);
    const result = await cloudinary.uploader.upload(req.file.path);
    const updatedProfile = await profile.updateOne({
      $set: {
        photo: result.secure_url,
        cloudinary_id: result.public_id,
      },
    });

    res.json(updatedProfile);
  } else {
    res.status(404);
    throw new Error('No profile found');
  }
});

// @route PUT /profile/edit
// @desc edit user profile
// @access Public
exports.editProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ userId: req.user.id });

  if (!profile) {
    res.status(404);
    throw new Error("Profile doesn't exist");
  }
  profile.set(req.body);
  const updatedProfile = await profile.save();
  res.status(200).json({
    success: {
      profile: updatedProfile,
    },
  });
});

// @route GET /profile/load
// @desc Get user profile data
// @access Private
exports.loadProfile = asyncHandler(async (req, res, next) => {
  const profile = await User.findById(req.user.id, 'profile');

  if (!profile) {
    res.status(401);
    throw new Error('Not authorized');
  }

  res.status(200).json({
    success: {
      profile: profile,
    },
  });
});
