const router = require('express').Router();

router.get('/', function (req, res, next) {
    res.status(200).json({message: '/registration/oauth endpoint listening.'});
});

module.exports = router;