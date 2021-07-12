var express = require('express');

var indexApi = require('./app_api/routes/index');

var app = express();

app.use('/api/v1', indexApi);

module.exports = app;