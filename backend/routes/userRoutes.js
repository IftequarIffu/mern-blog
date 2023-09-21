const express = require('express')
const {loginMethod, registerMethod, isLoggedIn, logOut, getUserById} = require('../controllers/userController')
const passport = require('passport')
const {generateToken} = require('../utils/authUtils')

const userRouter = express.Router()

userRouter.post('/login', loginMethod)

userRouter.post('/register', registerMethod)

userRouter.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

userRouter.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', session: false }),
  function(req, res) {
    // Successful authentication, redirect home.
    const userId = req.user.id
    const userName = req.user.name
    const token = generateToken({userId, userName})
    res.cookie('jwt', token, {
        expiresIn: '30d'
    })
    // res.status(200)
    // res.json("Successful")
    res.redirect(process.env.CLIENT_URI)
  });

  userRouter.get('/isLoggedIn', isLoggedIn)

  userRouter.get('/logout', logOut)

  userRouter.get('/users/:userId', getUserById)

  module.exports = userRouter