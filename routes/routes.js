const routes = require('express').Router();
const login = require('./login/index');
const registration = require('./registration/index');

routes.use('/registration', registration)
routes.use('/login', login)

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Server is listening.'});
})



module.exports = routes;
