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
    ref: 'User',
  },
  rate: {
    type: Number,
    required: true,
    set: function () {
      const sitterProfile = await Profile.findById(this.sitterId);
      return sitterProfile.rate;
    }
  },
  hoursOfService: {
    type: Number,
    required: true,
  },
  totalPayment: {
    type: Number,
    required: true,
    set: function () {
      const processingFee = 5;
      return (this.rate * this.hoursOfService + processingFee);
    }
  },
  customerId: {
    type: String,
    required: true,
  },
});


module.exports = Payment = mongoose.model("Payment", paymentSchema);
