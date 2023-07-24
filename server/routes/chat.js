const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/ChatMessage');

// Get all chat messages
router.get('/', async (req, res) => {
  try {
    const messages = await ChatMessage.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new chat message
router.post('/', async (req, res) => {
  const message = new ChatMessage({
    user: req.body.user,
    message: req.body.message,
    timestamp: req.body.timestamp
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;