const db = require('./config_db');

async function truncateTable() {
    try {
        return await db.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    }
    catch(err) {
        console.error(err.stack);
        return err;
    }
}

async function insert(user) {
    try {
        return await db.query(`INSERT INTO users(email, hash) VALUES($1, $2) RETURNING  user_id, email`, [user.email, user.hash]);
    }
    catch(err) {
        return err;
    }
}

async function selectByID(id) {
    try {
        return await db.query('SELECT * FROM users WHERE user_id=$1', [id]);
    }
    catch(err) {
        return err;
    }
}

async function selectByEmail(email) {
    try {
        return await db.query('SELECT * FROM users WHERE email=$1', [email]);
    }
    catch(err) {
        return err;
    }
}

module.exports = {
    truncateTable,
    insert,
    selectByID,
    selectByEmail,
}