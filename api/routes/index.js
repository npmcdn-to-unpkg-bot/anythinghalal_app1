var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
  next()
})

// Basic Route
// -----------------
router.get('/', function (req, res, next) {
  res.json({ Message: 'Hello' })
})

// Keep project routes in a seperate controller file
router.get('/users', userController.getAllUsers)

// Error handling
router.get('/err', function (req, res, next) {
  next(new Error('Some Error'))
})

// API Specific 404 / Error Handlers
// ---------------------------------

// API not found
router.use(function (req, res, next) {
  res.status(404)
  res.send()
})

// erorrs handler
router.use(function (err, req, res, next) {
  var status = err.status || 500
  res.status(status)
  res.json({
    app: 'api',
    status: status,
    error: err.message
  })
})

// Exports
// -------

module.exports = router
