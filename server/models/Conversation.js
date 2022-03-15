const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }

});

module.exports = Conversation = mongoose.model('Conversation', conversationSchema);