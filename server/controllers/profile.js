const asyncHandler = require('express-async-handler');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary');
const multer = require('multer');
const Profile = require('../models/Profile');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images',
    public_id: (req, file) => {
      file.originalname + file.size;
    },
  },
});
const upload = multer({ storage: storage }).single('File');

// @route POST /profile//uploadPicture
// @desc upload user profile picutre
exports.uploadPicture = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById({ porfileId: req.profile.id });
  if (!profile) {
    res.status(404);
    throw new Error('No profile found');
  }
  upload(async (req, res, err) => {
    if (err) {
      res.status(400).send('Something went wrong!');
    }
    const updatedProfile = await profile.updateOne({
      $set: {
        photo: req.file.path,
        cloudinary_id: req.file.filename,
      },
    });
    res.status(200);
    res.json({ message: 'Picture uploaded', updatedProfile });
  });
});

// @route DELETE /profile//deletePicture
// @desc delete user profile picutre
exports.deletePicture = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById({ porfileId: req.profile.id });
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
//@route PUT /profile//updatePicture
// @desc update user profile picutre
exports.updatePicture = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById({ porfileId: req.profile.id });
  if (!profile) {
    res.status(404);
    throw new Error('No profile found');
  }
  await cloudinary.uploader.destroy(profile.cloudinary_id);
  upload(async (req, res, err) => {
    if (err) {
      res.status(400).send('Something went wrong!');
    }
    const updatedProfile = await profile.updateOne({
      $set: {
        photo: req.file.path,
        cloudinary_id: req.file.filename,
      },
    });
    res.status(200);
    res.json({ message: 'Picture updated', updatedProfile });
  });
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
