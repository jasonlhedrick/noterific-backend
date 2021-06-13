const oauth = require('express').Router();


oauth.get('/', function(res, res, next) {
    res.status(200).json({message: '/oauth endpoint listening.'});
})

module.exports = oauth;