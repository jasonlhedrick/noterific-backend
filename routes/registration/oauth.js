const oauth = require('express').Router();
const jwt = require('../../helpers/jwt');

oauth.get('/', function (req, res) {
    res.status(200).json({message: '/registration/oauth endpoint listening.'});
});

module.exports = oauth;