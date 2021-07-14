var express = require('express');
var passport = require('passport');

require('./app_api/models/db');
require('./app_api/configuration/passport');

var indexApi = require('./app_api/routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/api/v1', indexApi);

module.exports = app;