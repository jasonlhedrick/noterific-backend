const sqlite3 = require('sqlite3').verbose();

const dbName = 'noterific.db'
const testDBName = 'noterific-test.db';

const db = new sqlite3.Database(`../db/${testDBName}`, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(`Connected to ${testDBName}`);
});

module.exports = db;

/*
This causes Node to throw a NAPI error.
try {
    const db = new sqlite3.Database(`../db/${testDBName}`, (err) => {
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
*/