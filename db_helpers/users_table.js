const db = require('./db_helpers/config_db');

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

function localRegistration(user) {

}

function oauthRegistration(user) {

}

function localLogin(user) {

}

function oauthLogin(user) {

}

function getUserById(id) {

}

function getUserByEmail(email) {

}

module.exports = {
    createTable,
    truncateTable,
    localRegistration,
    oauthRegistration,
    localLogin,
    oauthLogin,
    getUserById,
    getUserByEmail,
}