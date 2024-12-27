const dbName = 'whatsapp-clone';
const storeName = 'messages';

const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject('Error opening IndexedDB');
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'timestamp' });
            }
        };
    });
};

export const storeMessagesOffline = async (contactId, message) => {
    const db = await openDB();
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    store.add({ contactId, text: message, timestamp: new Date().toISOString() });
    await transaction.complete;
};

export const getMessagesOffline = async (contactId) => {
    const db = await openDB();
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const messages = [];
    const cursor = await store.index('contactId').openCursor();
    cursor?.continue(function check(cursor) {
        if (cursor && cursor.value.contactId === contactId) {
            messages.push(cursor.value);
            cursor.continue();
        }
    });
    return messages;
};
