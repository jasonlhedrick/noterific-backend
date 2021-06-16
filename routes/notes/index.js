const notes = require('express').Router();
const verify = require('../../helpers/authorization');
const notesTable = require('../../db_helpers/notes_table');

notes.get('/', verify, async function (req, res) {
    const userID = req.body.userID;
    const userNotes = await notesTable.selectByUserID(userID);
    res.status(200).json({notes: userNotes.rows})
});

notes.post('/', verify, async function (req, res) {
    const note = {title: req.body.title, body: req.body.body}
    const userID = req.body.userID;
    const updatedRow = await notesTable.add(note, userID)
    res.status(200).json(updatedRow.rows);
});

notes.put('/:note_id', verify, async function (req, res) {
    res.status(200).json({message: 'Under construction.'});
});

notes.delete('/:note_id', verify, async function(req, res) {
    res.status(200).json({message: 'Under construction.'});
});

module.exports = notes;