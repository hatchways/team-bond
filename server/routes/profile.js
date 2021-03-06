const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { validateMongoObjectId } = require('../validate');
const {
  editProfile,
  loadProfile,
  uploadPicture,
  deletePicture,
  updatePicture,
  getProfile
} = require('../controllers/profile');

router.route('/edit').put(protect, editProfile);
router.route('/load').get(protect, loadProfile);
router.route('/uploadPicture').post(protect, uploadPicture);
router.route('/deletePicture').delete(protect, deletePicture);
router.route('/updatePicture').put(protect, updatePicture);
router.route('/:id').get([protect, validateMongoObjectId], getProfile);

module.exports = router;
