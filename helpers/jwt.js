const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;

async function sign(id) {
    return await jwt.sign(id, secret);
}

async function verify(token) {
    return await jwt.verify(token, secret);
}

module.exports = {
    sign,
    verify
}