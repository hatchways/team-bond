const mongoose = require('mongoose');

const requestSchema = new mongoose({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Sitter',
  },

  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
    min: start,
  },
});

//Request is a constructor so I cant use it
module.exports = Requests = mongoose.model('Request', profileSchema);
