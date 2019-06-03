const express = require('express');


const router = express.Router();

router.get('/login', (req, res, next) => {
    res.status(200).json({name: 'Brijesh'})
})

module.exports = router;