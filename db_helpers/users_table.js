const db = require('./config_db');

async function createTable() {
    
}

async function truncateTable() {
    try {
        return await db.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    }
    catch(err) {
        console.error(err.stack);
    }
}

async function insert(user) {
    try {
        return await db.query(`INSERT INTO users(email, hash) VALUES($1, $2) RETURNING  user_id, email`, [user.email, user.hash]);
    }
    catch(err) {
        console.error(err.stack);
    }
}

async function selectById(id) {
    try {
        return await db.query('SELECT * FROM users WHERE user_id=$1', id);
    }
    catch(err) {
        console.error(err.stack);
    }
}

async function selectByEmail(email) {
    
}

module.exports = {
    createTable,
    truncateTable,
    insert,
    selectById,
    selectByEmail,
}