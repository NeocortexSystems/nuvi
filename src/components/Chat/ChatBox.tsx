import React, { useState, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { Message } from '../../types';
import './ChatBox.css';

export const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch messages from backend
    fetch('/api/chat')
      .then(response => response.json())
      .then(data => setMessages(data.messages));
  }, []);

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    // Send message to backend
    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input }),
    })
      .then(response => response.json())
      .then(data => setMessages(prevMessages => [...prevMessages, data.message]));

    setInput('');
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <form className="chat-input" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};