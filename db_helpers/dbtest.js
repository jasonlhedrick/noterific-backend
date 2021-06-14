const users = require('./users_table');
const bcrypt = require('../helpers/bcrypt');
const jwt = require('../helpers/jwt');

const notes = require('./notes_table');

async function test() {
    console.log(await users.selectByEmail('a@a.com'));
    console.log(await users.selectById(1));
}

test();