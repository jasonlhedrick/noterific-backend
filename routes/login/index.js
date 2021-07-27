const login = require('express').Router();
const oauth = require('./oauth');
const bcrypt = require('../../helpers/bcrypt');
const jwt = require('../../helpers/jwt');
const usersTable = require('../../db_helpers/users_table');
const { request } = require('express');

login.use('/oauth', oauth);

login.get('/', function(req, res) {
    res.status(200).json({message: '/login endpoint listening.'});
});

login.post('/', async function(req, res) {
    const requestingUser = req.body;

    if (requestingUser.email && requestingUser.password) {
        try {
            const user = await usersTable.selectByEmail(requestingUser.email);
            if (user.rowCount === 0) {
                res.status(403).json({message: 'Invalid email or password.'});
                return;
            }

            const verifyPassword = await bcrypt.verify(requestingUser.password, user.rows[0].hash);
            if (verifyPassword) {
                const token = await jwt.sign(user.rows[0].user_id);
                res.status(200).json({token: token})
                return;
            }
            else {
                res.status(403).json({message: 'Invalid email or password.'});
                return;
            }
        }
        catch(err) {
            res.status(500).json({message: err});
            return;
        }
    }
    else {
        res.status(400).json({
            message: 'Logging in requires both a email and password.'
        });
        return;
    }
});
module.exports = login;