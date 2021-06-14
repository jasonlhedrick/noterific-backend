const notes = require('../db_helpers/notes_table');

beforeAll(async () => {
    notes.createTable();
});

afterAll(async () => {
    notes.truncateTable();
});

describe('Noterific database notes table testing.', () => {
    it('should add a note', () =>{
        await notes.addNote({title: 'Jest Note', body: 'Jest test note body.'});
        const jestNote = notes.getNoteById(1);
        expect(jestNote.title).toBe('Jest Note');
    });
});