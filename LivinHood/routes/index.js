const Controller = require ('../controllers')
const express = require('express')
const router = express.Router()
const session = require('express-session')
const admin = require('./admin.js')
const user = require('./user.js')
const login = require('./login.js')


router.get ('/', Controller.main)
router.get ('/register', Controller.formSignup)
router.post ('/register', Controller.signup)
router.get ('/login', Controller.loginForm)
router.post ('/login', Controller.login)

router.use(function (res, req, next) {
  if (condition) {
    next()
  }
})

// router.get ('/login', login) //LOGIN
router.use ('/admin', admin)
router.use ('/user', user)

module.exports = router