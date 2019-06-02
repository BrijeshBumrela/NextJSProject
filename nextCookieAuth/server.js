const next = require('next');
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

const AUTH_USER_TYPE = "authenticated";
const COOKIE_SECRET = "foinvonevo;ndv";
const COOKIE_OPTIONS = {
    httpOnly: true,
    signed: true
}

const authenticate = async (email, password) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data.find(user => user.email === email && user.website === password);
}

app.prepare().then(() => {
    const server = express();
    server.use(express.json());
    server.use(cookieParser(COOKIE_SECRET));

    server.post('/api/login',async (req, res, next) => {
        const { email, password } = req.body;
        const userData = await authenticate(email, password);
        console.log(userData);
        if (!userData) {
            return res.status(403).send()
        }
        const user = {
            name: userData.name,
            email: userData.email
        }
        res.cookie('token', user, COOKIE_OPTIONS);
        res.json(user);
    })


    server.get('*', (req, res) => {
        return handle(req, res);
    })

    server.listen(port, err => {
        if (err) throw err;
        console.log(`listening on PORT ${port}`);
    })
})