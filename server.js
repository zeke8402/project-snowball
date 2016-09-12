//require('dotenv').config();

var express = require('express');
var Sequelize = require('sequelize');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
/*

var User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
});

User.sync().then(function() {
    User.create({
        username: 'test',
        email: 'test',
    });
});
*/

//app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(morgan('dev'));
// ROUTES FOR OUR API
// =============================================================================
var routes = require('./routes');
app.use('/', routes);
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
app.listen(3000);
console.log("here we are on port 3000");

module.exports = app;
