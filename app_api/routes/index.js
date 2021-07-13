var express = require('express');
var router = express.Router();

var ctrlAuthentication = require('../controllers/authentication');

router.get('/', function (req, res) {
    console.log("On route '/'");
    res.send('Page Listing');
 });

 router.post('/registration', ctrlAuthentication.registration);

 module.exports = router;