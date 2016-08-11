var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
var signInUpController = require('../controllers/signInUpController')
var listingController = require('../controllers/listingController')
var categoryController = require('../controllers/categoryController')

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

// Keep project routes in a seperate controller file
// ROUTING END POINTS TO THE APPROPRIATE FUNCTIONS
router.post('/signup', signInUpController.signUp)
router.post('/signin', signInUpController.signIn)

// Keep project routes in a seperate controller file
router.get('/listings', listingController.index)
router.get('/listings/:id', listingController.show)
router.put('/listings/:id', listingController.update)
router.post('/listings', listingController.create)
router.delete('listings/:id', listingController.remove)

// Keep project routes in a seperate controller file
router.get('/categories', categoryController.index)
router.get('/categories/:id', categoryController.show)
router.post('/categories', categoryController.create)
router.delete('categories/:id', categoryController.remove)

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
