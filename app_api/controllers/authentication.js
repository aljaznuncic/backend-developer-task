var mongoose = require('mongoose');
var User = mongoose.model('User');

var returnJsonResponse = function(response, status, content) {
  response.status(status);
  response.json(content);
};

module.exports.registration = function(request, response) {
    if (!request.body || !request.body.name || !request.body.username || !request.body.password) {
        console.log(request);
        returnJsonResponse(response, 400, {
            "message": "All data are required"
        });
        return;
    }
    var user = new User();
    user.name = request.body.name;
    user.username = request.body.username;
    user.setPassword(request.body.password);
    user.save(function(err) {
        if (err) {
            returnJsonResponse(response, 500, err);
        } else {
            returnJsonResponse(response, 200, {
                "message": "User successfully registered"
            });
        }
    })
}