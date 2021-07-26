var express = require('express');
var router = express.Router();
var passport = require('passport');

var ctrlAuthentication = require('../controllers/authentication');
var ctrlFolder = require('../controllers/folders');

router.get('/', passport.authenticate('basic', { session: false }), function (req, res) {
    console.log("On route '/'");
    res.send('Page Listing');
});

router.post('/registration', ctrlAuthentication.registration);

router.get('/folders', passport.authenticate('basic', { session: false }), ctrlFolder.folderReadAll);
router.get('/folders/:folderId', passport.authenticate('basic', { session: false }), ctrlFolder.folderReadSelected);
router.post('/folders', passport.authenticate('basic', { session: false }), ctrlFolder.folderCreate);
router.put('/folders/:folderId', passport.authenticate('basic', { session: false }), ctrlFolder.folderUpdateSelected);
router.delete('/folders/:folderId', passport.authenticate('basic', { session: false }), ctrlFolder.folderDeleteSelected);

module.exports = router;