var mongoose = require('mongoose');
var Folder = mongoose.model('Folder');

var returnJsonResponse = function(response, status, content) {
    response.status(status);
    response.json(content);
};

module.exports.folderCreate = function(request, response) {
    if (!request.body || !request.body.name) {
        returnJsonResponse(response, 400, {
            "message": "Folder name is missing"
        });
        return;
    }
    Folder
        .create({
            name: request.body.name,
            authorId: request.user._id
        }, function(error, folder) {
            if (error) {
                returnJsonResponse(response, 400, error);
            } else {
                returnJsonResponse(response, 201, folder);
            }
        });
}

module.exports.folderReadSelected = function(request, response) {
    if (request.params && request.params.folderId) {
        if (!(/^\w+$/.test(request.params.folderId)) || Object.keys(request.query).length > 0) {
            returnJsonResponse(response, 400, {
                "message": "Wrong request"
            });
            return;
        }
        Folder
            .findById(request.params.folderId)
            .exec(function(error, folder) {
                if (!folder) {
                    returnJsonResponse(response, 404, {
                        "message": "I can't find a folder with the unique ID folderId."
                    });
                    return;
                } else if (error) {
                    returnJsonResponse(response, 500, error);
                    return;
                } else if (!folder.authorId.equals(request.user._id)) {
                    returnJsonResponse(response, 403, {
                        "message": "You do not have permission to access the data."
                    });
                    return;
                }
                returnJsonResponse(response, 200, folder);
            });
    } else {
        returnJsonResponse(response, 400, {
            "message": "Missing unique ID folderId!"
        });
    }
};

module.exports.folderUpdateSelected = function(request, response) {
    if (!request.params || !request.params.folderId) {
        returnJsonResponse(response, 400, {
            "message": "I can't find a folder, folderId is missing."
        });
        return;
    }
    Folder
        .findById(request.params.folderId)
        .exec(function(error, folder) {
            if (!folder) {
                returnJsonResponse(response, 404, {
                    "message": "I can't find a folder with the unique ID folderId."
                });
                return;
            } else if (error) {
                returnJsonResponse(response, 500, error);
                return;
            } else if (!folder.authorId.equals(request.user._id)) {
                returnJsonResponse(response, 403, {
                    "message": "You do not have permission to access the data."
                });
                return;
            }
            folder.name = request.body.name;
            folder.save(function(error, folder) {
                if (error) {
                    returnJsonResponse(response, 400, error);
                } else {
                    returnJsonResponse(response, 200, folder);
                }
            });
        });
};

module.exports.folderDeleteSelected = function(request, response) {
    if (!request.params || !request.params.folderId) {
        returnJsonResponse(response, 400, {
            "message": "I can't find a folder, folderId is missing."
        });
        return;
    }
    Folder
        .findById(request.params.folderId)
        .select('authorId')
        .exec(function(error, folder) {
            if (!folder) {
                returnJsonResponse(response, 404, {
                    "message": "I can't find a folder with the unique ID folderId."
                });
                return;
            } else if (error) {
                returnJsonResponse(response, 500, error);
                return;
            } else if (!folder.authorId.equals(request.user._id)) {
                returnJsonResponse(response, 403, {
                    "message": "You do not have permission to access the data."
                });
                return;
            }
            Folder
                .findByIdAndRemove(request.params.folderId)
                .exec(function(error, folder) {
                    if (error) {
                        returnJsonResponse(response, 404, error);
                        return;
                    }
                    returnJsonResponse(response, 204, null);
                });
        });
};

module.exports.folderReadAll = function(request, response) {
    Folder
        .find({authorId: request.user._id})
        .sort(request.query.sort)
        .skip(parseInt(request.query.skip))
        .limit(parseInt(request.query.limit))
        .exec(function(error, folders) {
            if (error) {
                returnJsonResponse(response, 500, error);
                return;
            }
            returnJsonResponse(response, 200, folders);
        });
};