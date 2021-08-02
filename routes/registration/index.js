const registration = require('express').Router();
const oauth = require('./oauth');
const bcrypt = require('../../helpers/bcrypt');
const jwt = require('../../helpers/jwt');
const usersTable = require('../../db_helpers/users_table');
const db = require('../../db_helpers/config_db');

registration.get('/', function(req, res) {
    res.status(200).json({message: '/registration endpoint listening.'})
});

registration.post('/', async function(req, res) {
    const user = req.body;
    const query = await db.query(`SELECT * FROM users`);
    res.status(200).json(query);
    return;
    if (user.email && user.password) {
        try {
            const hash = await bcrypt.hash(user.password);
            const addedUser = await usersTable.insert({email: user.email, hash: hash});
            if (addedUser.code) {
                if (addedUser.code === '23505') {
                    res.status(409).json({
                        message: 'email already exists',
                        code: addedUser.code,
                        detail: addedUser.detail,
                    })
                }
            }
            else {
                const token = await jwt.sign(addedUser.rows[0].user_id);
                res.status(200).json({token: token});
            }
        }
        catch(error) {
            console.error(error);
            res.status(500).json({message: error});
        }
    }
    else {
        res.status(400).json({
            message: 'Registering a user requires both an email and password.'
        });
    }
});

registration.use('/oauth', oauth);

module.exports = registration