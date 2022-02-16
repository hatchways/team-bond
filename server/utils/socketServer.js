const jwt = require("jsonwebtoken");
const User = require('../models/User');
const onlineUsers = new Map();

const getId = (handshake) => {
      const tempArryOne = handshake.split('=');
      const tempArryTwo = tempArryOne[1].split(';');
      const token = tempArryTwo[0];
      const id = jwt.verify(token, process.env.JWT_SECRET).id;
      return id
}

const sock = (io) => {
  io.on('connection',async(socket)=>{
    socket.on('authenticate',async ()=>{
      const handshake = socket.handshake.headers.cookie;
      const id = getId(handshake);
      const user = await User.findById(id)
     if(user) {
       console.log(`user ${user.name} is authenticated`);
       onlineUsers.set(id,user);
       console.log(onlineUsers);
       
      }
    });
    console.log("connected");
    socket.on('logout',async() => {
      const handshake = socket.handshake.headers.cookie;
      const id = getId(handshake);
      const user = await User.findById(id)
      onlineUsers.delete(id);
      console.log(onlineUsers);
      console.log(`user ${user.name} has logged out`);
    })
  });
}

module.exports = sock;