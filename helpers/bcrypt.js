const bcrypt = require('bcrypt');

/**
 * hashPass bcrypt helper to hash a password.
 * @param {string} password The password to use to create the hash.
 * @returns {string} The hashed value.
 */
async function hashPassword(password) {
    try {
        return await bcrypt.hash(password, 15);
    }
    catch(error) {
        return { err: true, msg: error };
    }
}

/**
 * verifyHash bcrypt helper to verify a password against a hash.
 * @param {string} password The password to be checked against.
 * @param {string} hash The hash to be checked against.
 * @returns {Boolean} true or false
 */
async function verifyHash(password, hash) {
    try {
        return await bcrypt.compare(password, hash);
    }
    catch(error) {
        return { err: true, msg: error };
    }
}

module.exports = {
    hashPassword,
    verifyHash,
}