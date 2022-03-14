const User = require("../models/User");
const Profile = require("../models/Profile");

const seedDemoUser = async () => {
  const seedUser = {
    name: process.env.DEMO_USER_NAME,
    email: process.env.DEMO_USER_EMAIL,
    password: process.env.DEMO_USER_PASSWORD,
  };
    
	const user = await User.findOne({ email: seedUser.email });
  if (!user) {
    const newUser = await User.create(seedUser);
    await Profile.create({
      userId: newUser._id,
      name: newUser.name,
      description: 'Demo description',
      gender: 'other',
      address: '123 fake ave',
      telephone: '123-123-1234',
      birthday: new Date(1985, 2, 1),
      photo: 'https://hatchways.io/static/media/ComputerWithCheckmark.be7629c7.svg',
      stripeCustomerId: ''
    });
	}
};

module.exports = { seedDemoUser };



