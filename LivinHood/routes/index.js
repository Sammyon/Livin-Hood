const Controller = require ('../controllers')
const express = require('express')
const router = express.Router()
const employees = require('./employees.js')
const stores = require('./stores.js')


router.get ('/', Controller.main)
router.use ('/stores', stores)
router.use ('/employees', employees)

module.exports = router