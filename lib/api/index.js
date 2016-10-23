var express = require('express');
var app = module.exports = express();

var routes = require('./routes/index');
app.use('/', routes);

module.exports = app;
