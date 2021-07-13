var express = require('express');

require('./app_api/models/db');

var indexApi = require('./app_api/routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', indexApi);

module.exports = app;