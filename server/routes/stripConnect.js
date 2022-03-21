const express = require('express');
const router = express.Router();
const { createConnectedAccount, retrieveConnectedAccount, updateConnectedAccount } = require('../controllers/stripeConnect');

router.route('/create/:id').post(createConnectedAccount);
router.route('/account/:id').get(retrieveConnectedAccount);
router.route('/update/:id').put(updateConnectedAccount);


module.exports = router;