# whatsapp-web-clone

This project is a simple WhatsApp clone built with React and IndexedDB. The app allows users to chat with contacts, store messages offline using IndexedDB, and retrieve them even when the app is offline. It also provides basic functionalities like sending messages, selecting contacts, and displaying chat messages.

## Features
- Store messages offline using IndexedDB
- Send and receive messages in real-time
- Select contacts and view message history
- Mobile-friendly UI

## Prerequisites

Before you start, ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (v6 or later)

## Setup

Follow these steps to get the app up and running on your local machine.

1. **Clone:** `git clone `https://github.com/varshadhanotiya/whatsapp-web-clone`
2. **Navigate:** `cd whatsapp-clone`
3. **Install:** `npm install`
4. **Run:** `npm start` (This will open the app in your default web browser, usually at http://localhost:3000.)
5. **Mobile View:** Resize browser window (Ctrl + Shift + I, then Ctrl + Shift + M).


## Project Structure
Here’s an overview of the main files and directories:

```
src/ - Contains the main source code for the application.
components/ - Reusable components like ContactList, ChatWindow, Message, and MessageInput.
hooks/ - Custom hook useIndexedDB.js to interact with IndexedDB.
App.js - Main app component where state is managed, including contacts and messages.
App.css - Styles for the app.
public/ - Contains static files like index.html and favicon.
README.md - This file.
```

## Functions
```
useIndexedDB: A custom hook used to interact with IndexedDB for storing and retrieving messages.
addMessageToInstantDB: A helper function to store messages in IndexedDB.
getMessagesFromInstantDB: A helper function to fetch stored messages by contact ID.
```


## Features

**Sending and Receiving Messages**
Users can send messages in the chat window. When a user sends a message, it's stored in IndexedDB, and the UI is updated immediately.

**Contact List**
The app allows users to view contacts and select one for chatting. The messages for the selected contact are fetched from IndexedDB.

**Mobile and Web Support**
Mobile View: The app is mobile-friendly, with a responsive design for both small and large screens.

Web View: The web version remains unchanged, offering full functionality for desktop and large screen devices.

## Development Notes
The app uses IndexedDB to store messages locally, allowing users to send messages while offline and synchronize them when online.
For simplicity, no backend is used for storing messages; instead, the app relies on IndexedDB for local storage.
