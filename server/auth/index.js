const express = require('express');
const mongoose = require('mongoose');
const passport = require('../passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../db/models/user');

// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
// router.get(
// 	'/google/callback',
// 	passport.authenticate('google', {
// 		successRedirect: '/',
// 		failureRedirect: '/login'
// 	})
// )

router.post('/singup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please enter email and password.'});
  } else {
    let newUser = new User({
      email: req.body.email,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Email already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/login', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

// router.post('/login', function(req, res, next) {
// 		console.log(req.body)
// 		console.log('================')
// 		next()
// 	},
// 	passport.authenticate('local'),
// 	(req, res) => {
// 		console.log('POST to /login')
// 		const user = JSON.parse(JSON.stringify(req.user)) // hack
// 		const cleanUser = Object.assign({}, user)
// 		if (cleanUser.local) {
// 			console.log(`Deleting ${cleanUser.local.password}`)
// 			delete cleanUser.local.password
// 		}
//
// 		res.json({ user: cleanUser })
// 	}
// )

// this route is just used to get the user basic info
// router.get('/user', (req, res, next) => {
// 	console.log('===== user!!======')
// 	console.log(req.user)
// 	if (req.user) {
// 		return res.json({ user: req.user })
// 	} else {
// 		return res.json({ user: null })
// 	}
// })
//
//
//
// router.post('/logout', (req, res) => {
// 	if (req.user) {
// 		req.session.destroy()
// 		res.clearCookie('connect.sid') // clean up!
// 		return res.json({ msg: 'logging you out' })
// 	} else {
// 		return res.json({ msg: 'no user to log out!' })
// 	}
// })
//
// router.post('/signup', (req, res) => {
// 	const { username, password } = req.body
// 	// ADD VALIDATION
// 	User.findOne({ 'local.email': email }, (err, userMatch) => {
// 		if (userMatch) {
// 			return res.json({
// 				error: `Sorry, already a user with the email: ${email}`
// 			})
// 		}
//
// 		const newUser = new User({
// 			'local.email': email,
// 			'local.password': password
// 		})
//
// 		newUser.save((err, savedUser) => {
// 			if (err)
// 				return res.json(err)
//
// 			return res.json(savedUser)
// 		})
// 	})
// })

module.exports = router;
