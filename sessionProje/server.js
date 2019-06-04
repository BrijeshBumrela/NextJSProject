const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const next = require('next');

const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();

const adminRoutes = require('./api/routes/admin');

const MONGODB_URI ='mongodb://localhost:27018/practice';


server
    .prepare()
    .then(() => {
        const app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        const store = new mongoDBStore({
            uri: MONGODB_URI,
            collection: 'sessions'
        });


        app.use(
            session({
                secret: 'my secret',
                resave: false,
                saveUninitialized: false,
                store: store
            })
        )

        app.use((req, res, next) => {
            console.log(req.session);
            if (!req.session.user) {
              return next();
            }
            req.user = req.session.user;
            next();
        });
        
        app.use((req, res, next) => {
            //res.locals.isAuthenticated = req.session.isLoggedIn;
            next();
        });

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


