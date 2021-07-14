var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new BasicStrategy(
    function(username, password, done) {
        User.findOne(
            { 
                username: username 
            },
            function (err, user) {
            if (err) { 
                return done(err); 
            }
            if (!user) { 
                return done(null, false);
            }
            if (!user.verifyPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
));
