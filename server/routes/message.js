const express = require('express');
const router = express.Router();

const { findAllConversations, findAllConversationMessages } = require('../controllers/messages');

router.route('./allConversations/:id').get(findAllConversations);
router.route('./all').get(findAllConversationMessages);

module.exports = router;