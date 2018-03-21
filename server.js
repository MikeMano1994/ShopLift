// ===== import packages =====
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const api = require('./routes/api');

// ===== configuration =====

// create an object of express class
const app = express();

// set our port
const port = process.env.PORT || 3000; 

var db = require('./config/db');
// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters

// define the path for the static files (css/image/js)
app.use(express.static(__dirname + '/public')); 

// parse application/json 
app.use(bodyParser.json()); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 


// ===== routes =====
// configure our routes
require('./app/routes')(app);

// ===== start app =====
// startup our app at http://localhost:3000
app.listen(port, function() {     
	console.log('ShopLift now happens on port ' + port);
});               

// ===== expose app =====          
exports = module.exports = app;                 