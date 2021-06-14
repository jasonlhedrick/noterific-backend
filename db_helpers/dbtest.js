const users = require('./users_table');
const bcrypt = require('../helpers/bcrypt');
const jwt = require('../helpers/jwt');

async function test() {
    console.log(await users.getByEmail('a@a.com'));
    console.log(await users.getById(1));
}

test();