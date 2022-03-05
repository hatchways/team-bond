const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  id: Number,
  participants: [String],

});

module.exports = Conversation = mongoose.model('Conversation', conversationSchema);