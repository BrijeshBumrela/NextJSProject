const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();


const MONGODB_URI ='mongodb://localhost:27018/cookie';

server
    .prepare()
    .then(() => {
        const app = express();

        const adminRoutes = require('./api/routes/admin');

        app.use(bodyParser.urlencoded({ extended: false }));
        
        app.use(adminRoutes);
        
        app.get('*', (req, res) => {
            return handle(req, res);
        })

        mongoose
            .connect(MONGODB_URI, { useNewUrlParser: true })
            .then(result => {
                app.listen(3000);
                console.log('connected to database');
            })
            .catch(err => {
                console.log(err);
            })
    })


