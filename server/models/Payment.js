const mongoose = require('mongoose');
const Sitter = required('./Sitter.js');

const Payment = new mongoose({
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
  rate: {
    type: Number,
    required: true,
    set: getRate,
  },
  hoursOfService: {
    type: Number,
    required: true,
  },
  totalPayment: {
    type: Number,
    required: true,
    set: payTotalOf,
  },
});

const getRate = async (sitterId) => {
  const sitter = await Sitter.findById(sitterId);
  return sitter.rate;
};

const payTotalOf = (rate, hoursOfService) => {
  const processingFee = 5;
  retrun(rate * hoursOfService + processingFee);
};
