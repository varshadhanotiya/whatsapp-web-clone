import { useState, useEffect } from 'react';
import { openDB } from 'idb'; 

const useIndexedDB = (dbName, storeName) => {
    const [db, setDb] = useState(null);

    useEffect(() => {
        const initializeDB = async () => {
            const dbInstance = await openDB(dbName, 1, {
                upgrade(db) {
                    db.createObjectStore(storeName, { keyPath: 'id' });
                }
            });
            setDb(dbInstance);
        };
        initializeDB();
    }, [dbName, storeName]);

    const getAll = async () => {
        if (db) {
            return await db.getAll(storeName);
        }
        return [];
    };

    const add = async (data) => {
        if (db) {
            await db.add(storeName, data);
        }
    };

    return { getAll, add };
};

export default useIndexedDB;
