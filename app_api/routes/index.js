var express = require('express');
var router = express.Router();
var passport = require('passport');

var ctrlAuthentication = require('../controllers/authentication');

router.get('/', passport.authenticate('basic', { session: false }), function (req, res) {
    console.log("On route '/'");
    res.send('Page Listing');
 });

 router.post('/registration', ctrlAuthentication.registration);

 module.exports = router;