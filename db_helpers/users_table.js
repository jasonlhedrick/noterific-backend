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
    const query = 'INSERT INTO users(email, hash) VALUES($1, $2) RETURNING  user_id, email';
    try {
        return await db.query(query, [user.email, user.hash]);
    }
    catch(err) {
        return err;
    }
}

async function selectByID(id) {
    const query = 'SELECT * FROM users WHERE user_id=$1';
    try {
        return await db.query(query, [id]);
    }
    catch(err) {
        return err;
    }
}

async function selectByEmail(email) {
    const query = 'SELECT * FROM users WHERE email=$1'
    try {
        return await db.query(query, [email]);
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