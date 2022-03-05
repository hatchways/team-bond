const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  participants: [String],
});

module.exports = Conversation = mongoose.model('Conversation', conversationSchema);