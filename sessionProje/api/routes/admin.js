const express = require('express');


const router = express.Router();

router.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    if (email === 'brijesh' && password === 'brijesh') {
        
    }
})

module.exports = router;