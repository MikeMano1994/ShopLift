'use strict'
// import all dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
const passport = require('passport');

var app = express();
var router = express.Router();

// set up our port to be 3001 so that it doesn't collide with react's port 3000
var port = process.env.API_PORT || 3001;

// import the schemas
var Inventory = require('./models/Inventory');
var Order = require('./models/Order');
var User = require('./models/User');
var Product = require('./models/Product');

//db config
mongoose.connect('mongodb://nhattrinh:nhatTrinh95@ds249269.mlab.com:49269/shoplift');

// configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// prevent errors involving cross-origin
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 // remove caching ???
 // res.setHeader('Cache-Control', 'no-cache');
 next();
});
// set the route path
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

// use our router configuration when we call /api
app.use('/api', router);

// start the server and listens for requests
app.listen(port, function() {
 console.log('Shoplift Backend Running on ${port}');
});