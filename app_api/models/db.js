var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/notesapi';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.DB_URI;
}
mongoose.connect(dbURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.on('connected', function() {
    console.log('Mongoose is connected on ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

var correctStop = function(message, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose closed the connection through ' + message);
        callback();
    });
};

// At nodemon restart
process.once('SIGUSR2', function() {
    correctStop('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// At the exit from the application
process.on('SIGINT', function() {
    correctStop('exit the application', function() {
        process.exit(0);
    });
});

require('./users');
require('./folders');
require('./notes')