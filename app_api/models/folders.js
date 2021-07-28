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


noteSchema.pre("save", function(next) {
    Folder
        .countDocuments({_id: this.folderId}, function(error, count) {
            if (error || !count) {
                next(new Error("I can't find a folder with the unique ID folderId."));
            } else {
                next();
            }
        })
});

noteSchema.post("save", function(note) {
    Folder
        .countDocuments({_id: this.folderId}, function(error, count) {
            if (error || !count) {
                note.remove();
            }
        })
});

folderSchema.pre("remove", function(next) {
    Note.remove({folderId: this._id}, next);
});

folderSchema.post("remove", function(note) {
    Note.remove({folderId: note._id}).exec();
});


mongoose.model('Folder', folderSchema, 'Folders');
mongoose.model('Note', noteSchema, 'Notes');