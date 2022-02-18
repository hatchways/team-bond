// const mongoose = require('mongoose');
// const profileSchema = require('./Profile');

// const Profile = mongoose.model(Profile, profileSchema);
// const options = { discriminatorKey: 'kind' };

// const Sitter = Profile.discriminator(
//   'Sitter',
//   new mongoose.Schema({
//     stripeConnectId: {
//       type: String,
//       required: true,
//     },
//     availabilityId: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//     },
//     activeScheduleId: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//     },
//     requests: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'Request',
//     },
//     rate: {
//       type: Number,
//       get: dollarToCents,
//     },
//   }),
//   options
// );

// const dollarToCents = (rate) => rate * 100;

// module.exports = Sitter = mongoose.model('Sitter', profileSchema);
