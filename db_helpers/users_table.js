const db = require('./config_db');

async function createTable() {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            hash TEXT UNIQUE NOT NULL,
            failed_login_attempts INTEGER)`, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
    });
};

async function truncateTable() {
    return new Promise((resolve, reject) => {
        db.run('TRUNCATE TABLE users', (err, res) => {
            if (err) reject(err);
            resolve(res);
        })
    })
}

async function add(user) {
    return new Promise((resolve, reject) => {
        db.each('INSERT INTO users(email, hash) VALUES(?, ?)', [user.email, user.hash], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
}

async function getById(id) {
    return new Promise((resolve, reject) => {
        db.each('SELECT * FROM users WHERE user_id = ?', [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
}

async function getByEmail(email) {
    return new Promise((resolve, reject) => {
        db.each('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })
}

module.exports = {
    createTable,
    truncateTable,
    add,
    getById,
    getByEmail,
}