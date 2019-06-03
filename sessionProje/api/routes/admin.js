const express = require('express');


const router = express.Router();

router.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    if (email === 'brijeshbumrela@gmail.com' && password === 'brijesh') {
        console.log('atmadhe');
        req.session.isLoggedIn = true;
        req.session.user = 'brijesh';
        return req.session.save(err => res.redirect('/'));
    }
})

module.exports = router;