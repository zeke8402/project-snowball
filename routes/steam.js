var app = require('../app');
var express = require('express');
var router = express.Router();

var passport = require('passport');
var SteamStrategy = require('passport-steam').Strategy;

// Use the SteamStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(new SteamStrategy({
  returnURL: 'http://localhost:3333/steam/return',
  realm: 'http://localhost:3333/',
  apiKey: process.env.API_KEY
},
function(identifier, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {

    // To keep the example simple, the user's Steam profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Steam account with a user record in your database,
    // and return that user instead.
    profile.identifier = identifier;
    console.log('here da profile');
    console.log(profile);
    return done(null, profile);
  });
}
));

router.get('/login',
passport.authenticate('steam'),
function(req, res) {
  // Redirecting to steam so this function will not be used
});

router.get('/return',
passport.authenticate('steam', { failureRedirect: '/signin' }),
function(req, res) {
  console.log(req);
  console.log(res);
});


// Routes for callback url and mongodb creation

module.exports = router;
