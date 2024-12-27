import React, { useState } from 'react';
import MessageInput from './MessageInput';
import Message from './Message';
import './ChatWindow.css';

const ChatWindow = ({ contact, messages, onSendMessage, onClearChat }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <h3>Chat with {contact.name}</h3>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg} />
                ))}
            </div>
            <MessageInput value={message} onChange={setMessage} onSend={handleSend} />
        </div>
    );
};

export default ChatWindow;

