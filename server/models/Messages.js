const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  content: {
    type: String,
    required: true
  },
  time_created: {
    type: Date,
    required: true
  },
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Conversation',
  },
  read: {
    type: Boolean,
    default: false
  }
});

module.exports = Message = mongoose.model('Message', messageSchema);