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
    res.status(201).json(updatedRow.rows);
});

notes.put('/:note_id', verify, async function (req, res) {
    const note = {title: req.body.title, body: req.body.body, id: req.params.note_id}
    const userID = req.body.userID;

    if (note.title && note.body) {
        const checkNoteUserID = await notesTable.selectByNoteID(note.id);

        // Ensure this note ID is owned by the session token's userID.
        if (checkNoteUserID.rows[0].user_id.toString() === userID) {
            const updatedNote = await notesTable.updateByNoteID(note);
            if (updatedNote.command === 'UPDATE') {
                res.status(200).json({message: 'Note updated successfully.', note_id: note.id});
            }
        }
        else {
            res.status(403).json({message: `Note id: ${note.id} is not owned by current user.`});
        }
    }
    else {
        res.status(400).json({message: 'Updating a note requires a title and body.',});
    }
});

notes.delete('/:note_id', verify, async function(req, res) {
    const noteID = req.params.note_id
    const userID = req.body.userID;
    const checkNoteUserID = await notesTable.selectByNoteID(noteID);
    if (checkNoteUserID.rows.length === 0) {
        res.status(410).json({message: `Note id: ${noteID} not found.`});
    }
    else {
        if (checkNoteUserID.rows[0].user_id.toString() === userID) {
            const deleteNote = await notesTable.deleteByNoteID(noteID);
            console.log(deleteNote);
            if (deleteNote.command === 'DELETE') {
                res.status(200).json({message: `Note id: ${noteID} successfully deleted.`});
            }
        }
        else {
            res.status(403).json({message: `Note id: ${noteID} is not owned by current user.`});
        }
    }
});

module.exports = notes;