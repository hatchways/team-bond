const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  getAvailableSitters,
  createAvailability,
  updateAvailability,
  deleteAvailability,
  getAvailability
} = require('../controllers/availability');

router.route('').post(protect, createAvailability);
router.route('/:recordId').get(protect, getAvailability);
router.route('/:recordId').put(protect, updateAvailability);
router.route('/:recordId').delete(protect, deleteAvailability);

module.exports = router;
