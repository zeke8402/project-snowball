require('dotenv').config();

var express = require('express'); // framework
var session = require('express-session');
var passport = require('passport'); // open id
var util = require('util'); // idk
var morgan = require('morgan'); // no idea
var methodOverride = require('method-override'); // sure
var app = express();

app.use(express.static('public'));

// Routing to node modules scripts
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(morgan('dev')); // debugging im guessing

var routes = require('./routes/index');
app.use('/', routes);

// Routing manager
app.listen(3000);
console.log("here we are on port 3000");

module.exports = app;
