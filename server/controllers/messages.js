const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const Message = require('../models/Message');
const Conversation = require('../models/Conversation');


const createConversation = async (participants) => await Conversation.create(participants);

const createMessage = async (message) => {
  const { conversationId } = message;
  const { senderId, recipientId } = message;
  if (!conversationId) {
    participants = { sender: senderId, recipient: recipientId };
    const conversation = await createConversation(participants);
    conversationId = conversation.id;
  }
  const message = await Message.create({ ...req.body, conversationId });
  if (!message) throw new Error('Message format invalid');
  return message;
};

//this controller will be imported to the socket server to be sent to recipient
exports.sendMessage = asyncHandler(async (req, res, next) => {
  const message = await createMessage(req.body);
  res.status('200').send('success');
  return message;
});

exports.findAllConversationMessages = asyncHandler(async (req, res, next) => {
  const conversationId = req.body.conversationId;
  const messages = Message.find({ conversationId });
  res.send(messages);
});

exports.findAllConversations = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const conversations = await Conversation.find({
    $or: [
      { sender: id },
      { recipient: id }
    ]
  });
  const messages = conversations.map(async conversation => await Message.find({ conversationId: conversation.id }));
  res.send(conversations, messages);
});
