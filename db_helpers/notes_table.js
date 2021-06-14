const db = require('./config_db');

async function createTable() {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE notes(
            note_id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            body TEXT,
            user_id INTEGER NOT NULL,
            FOREIGN KEY (user_id)
                REFERENCES users (user_id)
        )`), (err) => {
            if(err) reject(err);
            resolve(true);
        }
    });
}

async function dropTable() {
    return new Promise((resolve, reject) => {
        db.run('DROP TABLE notes', (err) => {
            if (err) reject(err);
            resolve(true);
        });
    });
}

async function add(note) {
    return new Promise((resolve, reject) => {
        db.each('INSERT INTO notes(title, body, user_id) VALUES(?, ?, ?)', [note.title, note.body, note.user_id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
}

module.exports = {
    createTable,
    dropTable,
    add,
}