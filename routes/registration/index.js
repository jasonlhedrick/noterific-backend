const registration = require('express').Router();
const oauth = require('./oauth');
const bcrypt = require('../../helpers/bcrypt');
const jwt = require('../../helpers/jwt');
const users = require('../../db_helpers/users_table');

registration.get('/', function(req, res) {
    res.status(200).json({message: '/registration endpoint listening.'})
});

registration.post('/', async function(req, res) {
    const user = req.body;
    if (user.email && user.password) {
        try {
            const hash = await bcrypt.hash(user.pass);
            const user_id = await users.add({email: user.email, hash: hash});
            
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