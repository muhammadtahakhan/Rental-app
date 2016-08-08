/// <reference path="./../../typings/tsd.d.ts" />
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = Schema({
    email: String,
    passowrd: String
});
var User = mongoose.model('User', userSchema);
module.exports = User;
