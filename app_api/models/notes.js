var mongoose = require('mongoose');
var User = mongoose.model('User');
var Folder = mongoose.model('Folder');

var noteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    authorId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: User},
    folderId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: Folder},
    shareOption: {type: String, enum: ['private', 'public'], default: 'private'},
    type: {type: String, enum: ['text', 'list'], required: true},
    body: [String]
});

mongoose.model('Note', noteSchema, 'Notes');