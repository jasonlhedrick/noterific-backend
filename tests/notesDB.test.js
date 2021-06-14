const notes = require('../db_helpers/notes_table');

beforeAll(async () => {
    return notes.createTable();
});

afterAll(async () => {
    return notes.truncateTable();
});

describe('Noterific database notes table testing.', () => {
    it('should add a note', () =>{
        const row = await notes.add({title: 'Jest Note', body: 'Jest test note body.'});
        expect(row).toBe(1);
    });
    /*
    it('should get a note by id', () => {
        const jestNote = notes.getById(1);
        expect(jestNote.note_id).toBe(1);
    });

    it('should delete a note by id', () => {
        await notes.deleteByID(id);
        const jestNote = notes.getById(1);
        expect(jestNote).toBe(undefined);
    });

    it('should return a list of notes by user_id', () => {
        const notes = await notes.getByUserID(1);
        expect(note).toBe(Array);
    });
    */
});