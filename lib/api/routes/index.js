var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('You are now hitting my api module');
});

module.exports = router;
