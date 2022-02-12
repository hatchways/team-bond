const express = require('express');
const router = express.Router();
const { uploadPicture,deletePicture } = require('../middleware/cloudinary');
const protect = require('../middleware/auth');
const { editProfile, loadProfile } = require('../controllers/profile');

router.route('/edit').put(protect, editProfile);

router.route('/load').get(protect, loadProfile);

router.route('/uploadPicture').post(protect, uploadPicture);
router.route('/deletePicture').post(protect, deletePicture);

module.exports = router;
