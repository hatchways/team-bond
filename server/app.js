const colors = require("colors");
const path = require("path");
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const { notFound, errorHandler } = require("./middleware/error");
const connectDB = require("./db");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const jwt = require("jsonwebtoken");
const { seedData } = require("./seeds/demoSeed");

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
const bookingRouter = require('./routes/booking');
const availabilityRouter = require('./routes/availability');
const scheduleRouter = require("./routes/schedule");

const { json, urlencoded } = express;

connectDB();
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

// require('./utils/socketServer')(io);


if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/profile', profileRouter);
app.use('/booking', bookingRouter);
app.use('/availability', availabilityRouter);
app.use('/availabiltiy/schedule', scheduleRouter);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname), 'client', 'build', 'index.html')
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

app.use(notFound);
app.use(errorHandler);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

seedData();

module.exports = { app, server };
