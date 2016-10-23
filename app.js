require('dotenv').config();

var express = require('express'); // framework
var morgan = require('morgan'); // no idea
var methodOverride = require('method-override'); // sure
var passport = require('passport'); // open id
var session = require('express-session');
var util = require('util'); // idk

var app = express();

// Don't forget that this doesn't include itself in the path so /public/assets means /assets
app.use(express.static('public'));
app.set('view engine', 'pug');

// Routing to node modules scripts
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(morgan('dev'));

// Modularizing the api
var api = require('./lib/api');
app.use('/api', api);

var routes = require('./routes/index');
app.use('/', routes);

// Routing manager
app.listen(3000);
console.log("here we are on port 3000");

module.exports = app;
