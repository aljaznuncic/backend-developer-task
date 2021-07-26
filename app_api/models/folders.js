var mongoose = require('mongoose');
var User = mongoose.model('User');

var folderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    authorId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: User}
});

mongoose.model('Folder', folderSchema, 'Folders');