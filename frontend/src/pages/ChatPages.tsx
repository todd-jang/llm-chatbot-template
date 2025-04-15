import React, { useState } from 'react';
import { sendMessage } from '../api/chatApi';

const ChatPage = () => {
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    const response = await sendMessage(input);
    setMessages(prev => [...prev, { role: 'user', text: input }, { role: 'ai', text: response }]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>{msg.text}</div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} />
    </div>
  );
};

export default ChatPage;