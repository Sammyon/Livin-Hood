const Controller = require ('../controllers')
const express = require('express')
const router = express.Router()
const admin = require('./admin.js')
const user = require('./user.js')
const login = require('./login.js')


router.get ('/', Controller.main)
router.get ('/login', login) //LOGIN
router.use ('/admin', admin)
router.use ('/user', user)

module.exports = router