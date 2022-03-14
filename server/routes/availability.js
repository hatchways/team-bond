const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  getAvailableSitters,
  createAvailability,
  updateAvailability,
  deleteAvailability
} = require('../controllers/availability');

router.route('').get(protect, getAvailableSitters);
router.route('').post(protect, createAvailability);
router.route('/:recordId').put(protect, updateAvailability);
router.route('/:recordId').delete(protect, deleteAvailability);

module.exports = router;
