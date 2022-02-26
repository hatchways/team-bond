const jwt = require("jsonwebtoken");
const User = require('../models/User');
const notificationContent = require('../templates/notificationTemplates');
const onlineUsers = new Map();

const getId = (cookie) => {
  const tempArrayOne = cookie.split('=');
  const tempArrayTwo = tempArrayOne[1].split(';');
  const token = tempArrayTwo[0];
  const id = jwt.verify(token, process.env.JWT_SECRET).id;
  return id;
};

const sock = (io) => {
  io.on('connection', async (socket) => {
    socket.on('authenticate', async () => {
      const cookie = socket.handshake.headers.cookie;
      const id = getId(cookie);
      const user = await User.findById(id);
      if (user) {
        console.log(`${user.name} is authenticated and connected`);
        onlineUsers.set(id, { ...user._doc, socketId: socket.id });
        return onlineUsers;
      }
    });
    socket.on('logout', async () => {
      const cookie = socket.handshake.headers.cookie;
      const id = getId(cookie);
      const user = await User.findById(id);
      onlineUsers.delete(id);
      console.log(`user ${user.name} has logged out`);
      return onlineUsers;
    });
    socket.on('requested', async () => {
      const sitterId = socket.handshake.sitterId;
      const cookie = socket.handshake.headers.cookie;
      const userId = getId(cookie);
      const sitter = User.findById(sitterId);
      const user = User.findById(userId);
      const message = { ...notificationContent.get('requested'), description: `${user.name} requested a booking` };
      const sitterSocketId = onlineUsers.get(sitterId).socketId;
      sitterSocketId ? io.to(sitterSocketId).emit(message) : null;
    });
  });
};

module.exports = sock;