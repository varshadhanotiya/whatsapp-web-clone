import { InstantReactWebDatabase } from '@instantdb/react';

const db = new InstantReactWebDatabase({
    database: 'whatsapp-clone',
    table: 'messages',
});

export const storeMessagesOffline = async (contactId, message) => {
    try {
        await db.add({
            contactId,
            text: message,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Error storing message offline in InstantDB:', error);
    }
};

export const getMessagesOffline = async (contactId) => {
    try {
        const messages = await db.query({ contactId });
        return messages;
    } catch (error) {
        console.error('Error fetching offline messages from InstantDB:', error);
        return [];
    }
};
