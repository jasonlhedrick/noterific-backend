const login = require('express').Router();
const oauth = require('./oauth');

login.use('/oauth', oauth);

login.get('/', function(req, res) {
    res.status(200).json({message: '/login endpoint listening.'});
});

module.exports = login;