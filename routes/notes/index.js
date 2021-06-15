const notes = require('express').Router();
const verify = require('../../helpers/authorization');
const notesTable = require('../../db_helpers/notes_table');

notes.get('/', verify, async function (req, res) {
    const userID = req.body.userID;
    const userNotes = await notesTable.selectByUserID(userID);
    res.status(200).json({notes: userNotes.rows})
});

notes.post('/')


module.exports = notes;