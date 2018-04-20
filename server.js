'use strict'
// import all dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./server/db');

require('dotenv').config();

const app = express();
const router = express.Router();

// set up our port to be 3001 so that it doesn't collide with react's port 3000
const port = process.env.API_PORT || 3002;

// import the schemas
//const Inventory = require('./models/Inventory');
//const Order = require('./models/Order');
//const User = require('./models/User');
//const Product = require('./models/Product');

// ===== Middleware ====
app.use(morgan('dev'));
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

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

/* Express app ROUTING */
app.use('/auth', require('./server/auth'));

// use our router configuration when we call /api
app.use('/api', router);

// start the server and listens for requests
app.listen(port, ()=>{
 console.log('Shoplift Backend Running on ' + port);
});

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
});