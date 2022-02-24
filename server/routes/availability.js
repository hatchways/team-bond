const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { getAvailableSitters, createAvailability } = require('../controllers/availability');

router.route('').get(protect, getAvailableSitters);
router.route('/:sitterId').post(protect, createAvailability);

module.exports = router;
