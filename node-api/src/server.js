/// <reference path="./../typings/tsd.d.ts" />
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var apiRoute = require('./routes/api');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
// var config = require('./config'); // get our config file
// var User   = require('./models/user'); // get our mongoose model
var cors = require('cors');
var port = process.env.PORT || 8080;
//MongoDB 
mongoose.connect('mongodb://localhost:27017/rest_test', function (err) {
    if (err) {
        console.log('connection error', err);
    }
    else {
        console.log('MongoDb connected successful');
    }
});
//Express
var app = express();
// For crose origin requests
app.use(cors());
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
// app.use(bodyParser.json());
// basic route
app.get('/', function (req, res) {
    res.send('Hello! The API at: http://localhost:' + port + '/api');
});
// route for API
app.use('/api', apiRoute);
app.listen(port);
console.log("API is runnig on port " + port);
