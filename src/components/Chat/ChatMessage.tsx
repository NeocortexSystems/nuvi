import React from 'react';

interface ChatMessageProps {
  message: {
    user: string;
    text: string;
    timestamp: number;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { user, text, timestamp } = message;

  return (
    <div className="chat-message">
      <div className="chat-message-user">{user}</div>
      <div className="chat-message-text">{text}</div>
      <div className="chat-message-timestamp">{new Date(timestamp).toLocaleTimeString()}</div>
    </div>
  );
};

export default ChatMessage;