import React from 'react';
import './Message.css';

const Message = ({ message }) => {
    const { content, timestamp, sender } = message;

    const formattedTimestamp = new Date(timestamp).toLocaleString();

    return (
        <div className={`message ${sender === 'bot' ? 'chatbot' : 'user'}`}>
            <div className="message-content">{content}</div>
            <div className="message-timestamp">{formattedTimestamp}</div>
        </div>
    );
};

export default Message;
