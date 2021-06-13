const notes = require('express').Router();

notes.get('/', function (req, res) {
    res.status(200).json({message: '/notes endpoint listening.'})
});

module.exports = notes;