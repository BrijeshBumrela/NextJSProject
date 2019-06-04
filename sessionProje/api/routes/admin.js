const express = require('express');


const router = express.Router();

router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (email === 'brijeshbumrela@gmail.com' && password === 'brijesh') {
        console.log('atmadhe');
        req.session.isLoggedIn = true;
        req.session.user = 'brijesh';
        req.session.save();

        return res.json({ message: 'successfully logged in' })
    }
    res.status(500).json({ err: 'error occured' })
})

module.exports = router;