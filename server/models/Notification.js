const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User',
  },
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'Sitter',
  },
});

module.exports = Notification = mongoose.model("Notification", notificationSchema);
