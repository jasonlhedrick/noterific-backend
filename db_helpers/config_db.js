const sqlite3 = require('sqlite3');

const dbName = 'noterific.db'

try {
    const db = new sqlite3.Database(`./db/${dbName}`, (err) => {
        if (err) {
            throw err.message;
        }
        console.log(`Connected to ${dbName} successfully.`);
    })
    module.exports = db;
} 
catch(error) {
    console.error(error);
}