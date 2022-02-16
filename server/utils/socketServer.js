const jwt = require("jsonwebtoken");
const User = require('../models/User');

const sock = (io)=>{
  io.on('connection',async(socket)=>{
    socket.on('authenticate',async ()=>{
      const setCookie = socket.handshake.headers.cookie;
      const tempArryOne = setCookie.split('=');
      const tempArryTwo = tempArryOne[1].split(';');
      const token = tempArryTwo[0];
      const id = jwt.verify(token, process.env.JWT_SECRET).id;
     if(await User.findById(id)) console.log('user authenticated');
    });
    console.log("connected");
  });
}

module.exports = sock;