var mongoose = require('mongoose');
var Folders = mongoose.model('Folder');

var returnJsonResponse = function(response, status, content) {
    response.status(status);
    response.json(content);
};

module.exports.folderCreate = function(request, response) {
    if (!request.body.name) {
        returnJsonResponse(response, 400, {
            "message": "Folder name is missing"
        });
    } else {
        Folders.create({
            name: request.body.name,
            userId: request.user._id
        }, function(error, folder) {
            if (error) {
                returnJsonResponse(response, 400, error);
            } else {
                returnJsonResponse(response, 201, folder);
            }
        });
    }
}