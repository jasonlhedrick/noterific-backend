const routes = require('express').Router();
const login = require('./login/index');
const registration = require('./registration/index');
const notes = require('./notes/index');

routes.use('/registration', registration)
routes.use('/login', login)
routes.use('/notes', notes);

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Server is listening.'});
})

module.exports = routes;
