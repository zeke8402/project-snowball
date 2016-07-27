require('dotenv').config();

var express = require('express');
var Sequelize = require('sequelize');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var sequelize = new Sequelize(
  process.env.DB_HOST,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {

    host: 'localhost',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

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

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
