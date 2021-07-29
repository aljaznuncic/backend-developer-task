var mongoose = require('mongoose');
var User = mongoose.model('User');

var folderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    authorId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: User}
});

var noteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    authorId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: User},
    folderId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Folder'},
    shareOption: {type: String, enum: ['private', 'public'], default: 'private'},
    type: {type: String, enum: ['text', 'list'], required: true},
    body: [String]
});

mongoose.model('Folder', folderSchema, 'Folders');
mongoose.model('Note', noteSchema, 'Notes');