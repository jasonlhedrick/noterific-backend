const jwt = require('jsonwebtoken');
const secret = 'lamesecretuntilipullfrom.env';

async function signToken(id) {
    return await jwt.sign(id, secret);
}

async function verifyToken(token) {
    return await jwt.verify(token, secret);
}

module.exports = {
    signToken,
    verifyToken
}