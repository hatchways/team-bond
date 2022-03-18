const User = require("../models/User");
const Profile = require("../models/Profile");
const sitterSchema = require("../models/Profile");
const Availability = require("../models/Availability");

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
      blurb: 'Passionate pet sitter',
      gender: 'other',
      address: '123 fake ave',
      telephone: '123-123-1234',
      birthday: new Date(1985, 2, 1),
      photo: 'https://hatchways.io/static/media/ComputerWithCheckmark.be7629c7.svg',
      stripeCustomerId: ''
    });
	}
};

const seedDemoSitterProfiles = async () => {
  const demoSitterUser = {
    name: 'Norma Byers',
    email: 'testSitter1@test.com',
    password: 'Secret1234%',
  };

  const userExists = await User.findOne({ email: demoSitterUser.email });

  if (!userExists) {
    const newUser = await User.create(demoSitterUser);
  
    const demoAvailability = {
      sitterId: newUser._id,
      monday: {
        from: 480,
        to: 1260
      },
      tuesday: {
        from: 480,
        to: 1260
      },
      wednesday: {
        from: 480,
        to: 1260
      },
      thursday: {
        from: 480,
        to: 1260
      },
      friday: {
        from: 480,
        to: 1260
      },
      saturday: {
        from: 480,
        to: 1260
      },
      sunday: {
        from: 480,
        to: 1260
      },
      active: true,
      name: 'main',
    };
    const newAvail = await Availability.create(demoAvailability);
  
    const demoSitterProfiles = {
      userId: newUser._id,
      name: 'Norma Byers',
      description: 'Dog sitting,cat sitting, pocket pet and bird care',
      blurb: 'Great Sitter!',
      rate: 14,
      address: '123 123th Ave SW, Vancouver, WA',
      photo: 'https://hatchways.io/static/media/getExperienceShipProject.6657a258.svg',
      stripeConnectId: 'fake',
    }
  
    await sitterSchema.create({
      kind: "Sitter",
      availabilityId: newAvail._id,
      ...demoSitterProfiles
    });
  }
};

const seedData = () => {
  seedDemoUser();
  seedDemoSitterProfiles();
};

module.exports = { seedData };



