import React from 'react';
import './MessageInput.css';

const MessageInput = ({ value, onChange, onSend }) => {
    return (
        <div className="message-input">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type a message"
                className="message-input-field"
            />
            <button onClick={onSend} className="send-button">Send</button>
        </div>
    );
};

export default MessageInput;
