const stripe = require('stripe')(process.env.STRIPE_SECERT);

exports.createConnectAccount = async (user, profile) => {
  const firstLastName = user.name.split(' ');
  const account = await stripe.accounts.create({
    country: 'US',
    type: 'express',
    capabilities: {
      card_payments: { requested: true },
    },
    business_type: 'individual',
    business_profile: { url: 'http://localhost:3000' },
    individual: {
      address: profile.address,
      dob: profile.birthday,
      email: user.email,
      first_name: firstLastName[0],
      last_name: firstLastName[1],
      gender: profile.gender,
      phone: profile.telephone
    }
  });
  return account;
};

exports.createAccountLinks = async (account) => {
  const accountLink = await stripe.accountLinks.create({
    account: account,
    refresh_url: 'http://localhost:3000/dashboard',
    return_url: 'http://localhost:3000/dashboard',
    type: 'account_onboarding',
  });
};

exports.retrieveConnectAccount = async (id) => {
  await stripe.accounts.retrieve(id);
};

exports.updateConnectAccount = async (id, metadata) => {
  const account = await retrieveConnectAccount(id);
  account ? await stripe.accounts.update(
    account.id,
    { metadata: metadata }
  ) : null;

};




