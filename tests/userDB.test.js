const users = require('../db_helpers/users_table');
const bcrypt = require('../helpers/bcrypt');
const jwt = require('../helpers/jwt');

afterAll(async () => {
   return await users.truncateTable();
});

describe('Testing the users table.', () => {
    const hash = await bcrypt('password');
    const email = 'test@jest.com';
    const user = await users.insert({email: email, hash: hash});
    expect(user.rows[0].user_id).toBe(1);
});