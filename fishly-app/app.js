var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var jwt = require("jsonwebtoken");
var app = express();
var mongoose = require('mongoose');
var routes = require('./config/routes');

mongoose.connect('mongodb://localhost:27017/fishly-app');


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
