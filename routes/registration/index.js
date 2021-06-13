const registration = require('express').Router();
const oauth = require('./oauth');

registration.get('/', function(req, res) {
    res.status(200).json({message: '/registration endpoint listening.'})
});

registration.use('/oauth', function(req, res, next) {
    next();
}, oauth)

module.exports = registration;