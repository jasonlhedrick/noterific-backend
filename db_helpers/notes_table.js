const db = require('./config_db');

async function add(note, user_id) {
    const query = 'INSERT INTO notes(title, body, user_id) VALUES($1, $2, $3) RETURNING note_id';
    try {
        return await db.query(query, [note.title, note.body, user_id]);
    }
    catch(err) {
        return err;
    }
}

async function selectByUserID(user_id) {
    const query = 'SELECT * FROM notes WHERE user_id=$1';
    try {
        return await db.query(query, [user_id]);
    }
    catch(err) {
        return err;
    }
}

module.exports = {
    add,
    selectByUserID,
}