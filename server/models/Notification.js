const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
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
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }


});

module.exports = Notification = mongoose.model("Notification", notificationSchema);
