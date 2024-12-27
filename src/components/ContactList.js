import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onContactSelect }) => {
    return (
        <div className="contact-list">
            <h2>Contacts</h2>
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    className="contact-item"
                    onClick={() => onContactSelect(contact)}
                >
                    <div className="contact-name">{contact.name}</div>
                    <div className="last-message">{contact.lastMessage}</div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
