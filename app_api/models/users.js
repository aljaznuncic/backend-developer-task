var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    hashedValue: String,
    randomValue: String
})

userSchema.methods.setPassword = function(password) {
    this.randomValue = crypto.randomBytes(16).toString('hex');
    this.hashedValue = crypto.pbkdf2Sync(password, this.randomValue, 1000, 64, 'sha512').toString('hex');
  };
  
  userSchema.methods.checkPassword = function(password) {
    var hashedValue = crypto.pbkdf2Sync(password, this.randomValue, 1000, 64, 'sha512').toString('hex');
    return this.hashedValue == hashedValue;
  };

  mongoose.model('User', userSchema, 'Users');