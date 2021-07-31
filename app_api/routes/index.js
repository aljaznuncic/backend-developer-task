var express = require('express');
var router = express.Router();
var passport = require('passport');

var ctrlAuthentication = require('../controllers/authentication');
var ctrlFolder = require('../controllers/folders');
var ctrlNote = require('../controllers/notes');


router.post('/registration', ctrlAuthentication.registration);

router.get('/folders', passport.authenticate('basic', { session: false }), ctrlFolder.folderReadAll);
router.get('/folders/:folderId', passport.authenticate('basic', { session: false }), ctrlFolder.folderReadSelected);
router.post('/folders', passport.authenticate('basic', { session: false }), ctrlFolder.folderCreate);
router.put('/folders/:folderId', passport.authenticate('basic', { session: false }), ctrlFolder.folderUpdateSelected);
router.delete('/folders/:folderId', passport.authenticate('basic', { session: false }), ctrlFolder.folderDeleteSelected);

router.get('/notes', passport.authenticate('basic', { session: false }), ctrlNote.noteReadAll);
router.get('/notes/:noteId', passport.authenticate('basic', { session: false }), ctrlNote.noteReadSelected);
router.post('/notes', passport.authenticate('basic', { session: false }), ctrlNote.noteCreate);
router.put('/notes/:noteId', passport.authenticate('basic', { session: false }), ctrlNote.noteUpdateSelected);
router.delete('/notes/:noteId', passport.authenticate('basic', { session: false }), ctrlNote.noteDeleteSelected);

router.get('/sharedNotes', ctrlNote.sharedNoteReadAll);
router.get('/sharedNotes/:noteId', ctrlNote.sharedNoteReadSelected);

module.exports = router;