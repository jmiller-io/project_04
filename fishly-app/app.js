require('dotenv').config()
var express = require('express');
const favicon = require('serve-favicon');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
const session = require('express-session')
const methodOverride = require('method-override')
var jwt = require("jsonwebtoken");
var app = express();
var mongoose = require('mongoose');
var routes = require('./config/routes');

mongoose.connect('mongodb://localhost:27017/fishly-app');

const http = require('http').Server(app);

app.use(cors());
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
