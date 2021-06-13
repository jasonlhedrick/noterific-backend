const login = require('express').Router();
const oauth = require('./oauth');

login.get('/', function(req, res) {
    res.status(200).json({message: '/login endpoint listening.'});
});


login.use('/oauth', function(req, res, next) {
    next();
}, oauth)

module.exports = login;