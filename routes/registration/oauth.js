const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server listening for oAuth registration.',
    });
});

module.exports = router;