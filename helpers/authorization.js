const jwt = require('./jwt');

async function authorize(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const userID = await jwt.verify(token);
            req.body = {userID}
            next();
        }
        catch(error) {
            res.status(403).json({error});
        }
    }
    else {
        res.status(403).json({message: 'No authorization token found.'})
    }
}

module.exports = authorize;