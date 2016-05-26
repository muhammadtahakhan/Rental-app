/// <reference path="./../../typings/tsd.d.ts" />
var express = require('express');
var apiRoute = express.Router();
apiRoute.use(function (req, res, next) {
    res.send('Hello! The API at');
});
module.exports = apiRoute;
