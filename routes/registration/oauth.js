const oauth = require('express').Router();

oauth.get('/', function (req, res) {
    res.status(200).json({message: '/registration/oauth endpoint listening.'});
});

module.exports = oauth;