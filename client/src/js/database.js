import { openDB } from 'idb';

// Initialize the database
const initDB = async () => {
  const dbName = 'jate';
  const dbVersion = 1;

  try {
    const db = await openDB(dbName, dbVersion, {
      upgrade(db) {
        if (db.objectStoreNames.contains(dbName)) {
          console.log(`${dbName} database already exists`);
          return;
        }
        db.createObjectStore(dbName, { keyPath: 'id', autoIncrement: true });
        console.log(`${dbName} database created`);
      },
    });
  } catch (error) {
    console.error('Error initializing the database:', error);
  }
};

// Add content to the database
export const putDB = async (content) => {
  console.log('Adding data to the database');

  const dbName = 'jate';
  const dbVersion = 1;

  try {
    const db = await openDB(dbName, dbVersion);
    const tx = db.transaction(dbName, 'readwrite');
    const store = tx.objectStore(dbName);

    const request = store.put({ id: 1, value: content });

    await request;
    console.log('🚀 Data saved to the database:', content);
  } catch (error) {
    console.error('Error adding data to the database:', error);
  }
};

// Retrieve all content from the database
export const getDB = async () => {
  console.log('Retrieving data from the database');

  const dbName = 'jate';
  const dbVersion = 1;

  try {
    const db = await openDB(dbName, dbVersion);
    const tx = db.transaction(dbName, 'readonly');
    const store = tx.objectStore(dbName);

    const request = store.getAll();

    const result = await request;
    console.log('Retrieved data from the database:', result);
    return result;
  } catch (error) {
    console.error('Error retrieving data from the database:', error);
    return [];
  }
};

// Initialize the database when the module is loaded
initDB();