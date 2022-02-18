const mongoose = require('mongoose');
const Profile = required('./Profile.js');

const Payment = new mongoose.Schema({
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
  },
  hoursOfService: {
    type: Number,
    required: true,
  },
  totalPayment: {
    type: Number,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
});

module.exports = Profile = mongoose.model("Profile", profileSchema);

const getRate = async () => {
  const sitter = await Profile.findById(this.sitterId);
  return sitter.rate;
};

const payTotalOf = () => {
  const processingFee = 5;
  return (this.rate * this.hoursOfService + processingFee);
};

Profile.rate = getRate();
Profile.totalPayment = payTotalOf();