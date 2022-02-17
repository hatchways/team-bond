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
  }

});

module.exports = Notification = mongoose.model("Notification", notificationSchema);
