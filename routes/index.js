var express = require('express');
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  console.log('oh it gets here');
    res.json({ message: 'hooray! welcome to our api!' });
});

// Bear routes
//router.use('/bears', require('./bears'));

module.exports = router;
