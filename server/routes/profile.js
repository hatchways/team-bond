const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  editProfile,
  loadProfile,
  uploadPicture,
  deletePicture,
  updatePicture,
} = require('../controllers/profile');

router.route('/edit').put(protect, editProfile);
router.route('/load').get(protect, loadProfile);
router.route('/uploadPicture').post(uploadPicture);
router.route('/deletePicture').delete(protect, deletePicture);
router.route('/updatePicture').put(protect, updatePicture);

module.exports = router;
