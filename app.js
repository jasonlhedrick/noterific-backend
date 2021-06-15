require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes')
const users = require('./db_helpers/users_table');
const bcrypt = require('./helpers/bcrypt');
const jwt = require('./helpers/jwt');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(routes);

async function test() {
    await users.truncateTable();
    const hash = await bcrypt.hash('12345');
    const user = await users.insert({email: 'a@a.test', hash: hash});
    console.log(user.rows[0].user_id);
    const token = await jwt.sign(user.rows[0].user_id);
    console.log(user.rows[0]);
    console.log(token);
}

test();
module.exports = app;
