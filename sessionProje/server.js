const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGODB_URI ='mongodb://localhost:27018/shop';

const app = express();

const adminRoutes = require('./api/routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })