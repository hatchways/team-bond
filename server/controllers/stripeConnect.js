const asyncHandler = require('express-async-handler');
const Profile = require('../models/Profile');
const User = require('../models/User');
const { createConnectAccount, createAccountLinks, retrieveConnectAccount, updateConnectAccount } = require('../utils/stripeConnect');

// @route POST /connect/create/:id
// @desc create strip connect account and begin onboarding.
exports.createConnectedAccount = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findById({ sitterId: id });
  if (!profile) throw new Error('you have to become a sitter to continue');
  const user = await User.findById({ id: id });
  const account = retrieveConnectAccount(profile.stripeConnectId);
  if (account) {
    res.json({ message: 'you already have an account', account });
  } else {
    account = await createConnectAccount(user, profile);
    const accountLink = await createAccountLinks(account);
    res.send(accountLink);
  }
});


// @route POST /connect/account/:id
// @desc retrieve stripe Connect account.
exports.retrieveConnectedAccount = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findById({ sitterId: id });
  if (!profile) throw new Error('You have to become a sitter to continue');
  if (!profile.stripeConnectId) throw new Error(`You don't a stripe connect account please create one`);
  const account = retrieveConnectAccount(profile.stripeConnectId);
  res.send(account);
});

// @route PUT /connect/update/:id
// @desc retrieve stripe Connect account.
exports.updateConnectedAccount = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const profile = await Profile.findById({ sitterId: id });
  if (!profile) throw new Error('You have to become a sitter to continue');
  if (!profile.stripeConnectId) throw new Error(`You don't a stripe connect account please create one`);
  const updatedAccount = updateConnectAccount(profile.stripeConnectId, data);
  if (!updatedAccount) throw new Error(`You don't a stripe connect account to updated`);
  res.status(200).send(updatedAccount);
});