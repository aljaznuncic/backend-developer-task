var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log("On route '/'");
    res.send('Page Listing');
 });

 module.exports = router;