const User = require("../models/User");
const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const sitterSchema = require("../models/Profile");
const stripe = require('../utils/stripe');

// @route POST /auth/register
// @desc Register user
// @access Public
exports.registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const accountType = req.query.accountType; 

  const emailExists = await User.findOne({ email });

  if (emailExists) {
    res.status(400);
    throw new Error("A user with that email already exists");
  }

  const userExists = await User.findOne({ name });

  if (userExists) {
    res.status(400);
    throw new Error("A user with that username already exists");
  }

  const user = await User.create({
    name,
    email,
    password
  });

 if(user && accountType == "petSitter") {
    await sitterSchema.create({
      kind: "Sitter",
      userId: user._id,
      name,
      stripeConnectId,
      availabilityId,
      actiiveScheduleId,
      requests,
      rate
    });
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000
    });

    res.status(201).json({
      success: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      }
    });
  }else if(!user){
    res.status(400);
    throw new Error("Invalid user data");
  }
 else {
    // create stripe customer account when not sitter
    const booking = { userId: user._id };
    const stripeCustomer = await stripe.createStripeCustomer(booking);

    if (!stripeCustomer) {
      res.status(500);
      throw new Error("An error has occurred creating your account");
    }

    await Profile.create({
      userId: user._id,
      name,
      stripeCustomerId: stripeCustomer.id,
    });

    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000
    });

    res.status(201).json({
      success: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      }
    });
  }

});

// @route POST /auth/login
// @desc Login user
// @access Public
exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000
    });

    res.status(200).json({
      success: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      }
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @route GET /auth/user
// @desc Get user data with valid token
// @access Private
exports.loadUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const profile = await Profile.findOne({ userId: req.user.id });

  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.status(200).json({
    success: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      profile
    }
  });
});

// @route GET /auth/logout
// @desc Logout user
// @access Public
exports.logoutUser = asyncHandler(async (req, res, next) => {
  res.clearCookie("token");

  res.send("You have successfully logged out");
});

// @route POST /auth/demo
// @desc Demo user
// @access Public
exports.demoUser = asyncHandler(async (req, res, next) => {
  const email = process.env.DEMO_USER_EMAIL;
  const password = process.env.DEMO_USER_PASSWORD;

  const user = await User.findOne({ email });

  const profile = await Profile.findOne({ userId: user._id });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000
    });

    res.status(200).json({
      success: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        },
        profile
      }
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
