const mongoose = require("mongoose");
const User = require("../models/User");
const connectDB = require("../db");

connectDB();

const seedUser = [
    {
        name: 'demouser123',
        email: 'demouser123@gmail.com',
        password: 'demouserpassword123',
    },
];

const seedDB = async () => {
    await User.insertMany(seedUser);
};

seedDB().then(() => {
    mongoose.connection.close();
});



