var express = require('express')
var router = express.Router()
var signInUpController = require('../../controllers/signInUpController')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
  next()
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
})

router.get('/login', function (req, res) {
  res.render('login')
})

// ROUTING END POINTS TO THE APPROPRIATE FUNCTIONS
router.post('/signup', signInUpController.signUp)
router.post('/signin', signInUpController.signIn)

router.get('/categories', function (req, res) {
  res.render('categories')
})

module.exports = router
