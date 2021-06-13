const sqlite3 = require('sqlite3');

const dbName = 'noterific.db'
const testDBName = 'noterific-test.db';

try {
    const db = new sqlite3.Database(`./db/${testDBName}`, (err) => {
        if (err) {
            throw err.message;
        }
        console.log(`Connected to ${testDBName} successfully.`);
    })
    module.exports = db;
} 
catch(error) {
    console.error(error);
}