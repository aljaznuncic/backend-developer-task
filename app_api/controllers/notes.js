var mongoose = require('mongoose');
var Note = mongoose.model('Note');

var returnJsonResponse = function(response, status, content) {
    response.status(status);
    response.json(content);
};

module.exports.noteCreate = function(request, response) {
    if (!request.body || !request.body.name || !request.body.folderId || !request.body.type) {
        returnJsonResponse(response, 400, {
            "message": "Note name, folderId and type are required."
        });
        return;
    }
    // Error from middleware
    if (response.status(400)) {
        returnJsonResponse(response, 404, {
            "message": "I can't find a folder with the unique ID folderId."
        });
        return;
    }
        Note
            .create({
                name: request.body.name,
                authorId: request.user._id,
                folderId: request.body.folderId,
                shareOption: request.body.shareOption,
                type: request.body.type,
                body: request.body.body
            }, function(error, note) {
                if (error) {
                    returnJsonResponse(response, 400, error);
                } else {
                    returnJsonResponse(response, 201, note);
                }
            });
};

module.exports.noteReadSelected = function(request, response) {
    if (request.params && request.params.noteId) {
        if (!(/^\w+$/.test(request.params.noteId)) || Object.keys(request.query).length > 0) {
            returnJsonResponse(response, 400, {
                "message": "Wrong request"
            });
            return;
        }
        Note
            .findById(request.params.noteId)
            .exec(function(error, note) {
                if (!note) {
                    returnJsonResponse(response, 404, {
                        "message": "I can't find a note with the unique ID noteId."
                    });
                    return;
                } else if (error) {
                    returnJsonResponse(response, 500, error);
                    return;
                } else if (!note.authorId.equals(request.user._id)) {
                    returnJsonResponse(response, 403, {
                        "message": "You do not have permission to access the data."
                    });
                    return;
                }
                returnJsonResponse(response, 200, note);
            });
    } else {
        returnJsonResponse(response, 400, {
            "message": "Missing unique ID noteId!"
        });
    }
};

module.exports.noteUpdateSelected = function(request, response) {
    if (!request.params || !request.params.noteId) {
        returnJsonResponse(response, 400, {
            "message": "I can't find a note, noteId is missing."
        });
        return;
    }
    // Error from middleware
    if (response.status(400)) {
        returnJsonResponse(response, 404, {
            "message": "I can't find a folder with the unique ID folderId."
        });
        return;
    }
    Note
        .findById(request.params.noteId)
        .exec(function(error, note) {
            if (!note) {
                returnJsonResponse(response, 404, {
                    "message": "I can't find a note with the unique ID noteId."
                });
                return;
            } else if (error) {
                returnJsonResponse(response, 500, error);
                return;
            } else if (!note.authorId.equals(request.user._id)) {
                returnJsonResponse(response, 403, {
                    "message": "You do not have permission to access the data."
                });
                return;
            }
            note.name = request.body.name;
            note.folderId = request.body.folderId;
            note.shareOption = request.body.shareOption;
            note.type = request.body.type;
            note.body = request.body.body;
            note.save(function(error, note) {
                if (error) {
                    returnJsonResponse(response, 400, error);
                } else {
                    returnJsonResponse(response, 200, note);
                }
            });
        });
};

module.exports.noteDeleteSelected = function(request, response) {
    if (!request.params || !request.params.noteId) {
        returnJsonResponse(response, 400, {
            "message": "I can't find a note, noteId is missing."
        });
        return;
    }
    Note
        .findById(request.params.noteId)
        .select('authorId')
        .exec(function(error, note) {
            if (!note) {
                returnJsonResponse(response, 404, {
                    "message": "I can't find a note with the unique ID noteId."
                });
                return;
            } else if (error) {
                returnJsonResponse(response, 500, error);
                return;
            } else if (!note.authorId.equals(request.user._id)) {
                returnJsonResponse(response, 403, {
                    "message": "You do not have permission to access the data."
                });
                return;
            }
            Note
                .findByIdAndRemove(request.params.noteId)
                .exec(function(error, note) {
                    if (error) {
                        returnJsonResponse(response, 404, error);
                        return;
                    }
                    returnJsonResponse(response, 204, null);
                });
        });
};

module.exports.noteReadAll = function(request, response) {
    Note
        .find({authorId: request.user._id})
        .sort(request.query.sort)
        .skip(parseInt(request.query.skip))
        .limit(parseInt(request.query.limit))
        .exec(function(error, notes) {
            if (error) {
                returnJsonResponse(response, 500, error);
                return;
            }
            returnJsonResponse(response, 200, notes);
        });
};