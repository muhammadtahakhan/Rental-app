/// <reference path="./../../typings/tsd.d.ts" />
var express = require('express');
var user_model = require('./../models/users');
// var user = new user_model({
//     email: "taha_khan@yahoo.com",
//     passowrd :"123456"
// });
var apiRoute = express.Router();
apiRoute.get('/userlist', function (req, res) {
    user_model.find({}, function (err, users) {
        if (err)
            throw err;
        console.log(users);
        res.send("userlist: " + users);
    });
    // res.send("userlist ");
});
apiRoute.post('/createuser', function (req, res) {
    var email = req.body.email;
    var pass = req.body.password;
    console.log(email);
    console.log(pass);
    // let user = new user_model({})
    res.send("create user POST api rout");
});
apiRoute.use(function (req, res, next) {
    //     user.save(function(err) {
    //   if (err) throw err;
    //   console.log('User saved successfully!');
    // });
    res.send('Hello! The API at');
});
module.exports = apiRoute;
