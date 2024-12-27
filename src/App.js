import React, { useState, useEffect } from 'react';
import useIndexedDB from './hooks/useIndexedDB.js';
import ContactList from './components/ContactList.js';
import ChatWindow from './components/ChatWindow.js';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const { getAll, add } = useIndexedDB('chatDB', 'messages');

  useEffect(() => {
    setContacts([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Robert Brown' },
    ]);
  }, []);

  useEffect(() => {
    if (selectedContact) {
      getAll().then((storedMessages) => {
        setMessages(storedMessages.filter((msg) => msg.contactId === selectedContact.id));
      });
    }
  }, [selectedContact, getAll]);

  const sendMessage = async (messageContent) => {
    if (!messageContent.trim()) return;

    const message = {
      id: Date.now(),
      contactId: selectedContact.id,
      content: messageContent,
      timestamp: new Date(),
    };

    await add(message);

    setMessages((prevMessages) => [...prevMessages, message]);

    setNewMessage('');
  };

  return (
    <div className="app">
      <ContactList contacts={contacts} onContactSelect={setSelectedContact} />
      {selectedContact && (
        <ChatWindow
          contact={selectedContact}
          messages={messages}
          onSendMessage={sendMessage}
        />
      )}
    </div>
  );
};

export default App;
