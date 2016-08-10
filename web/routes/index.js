var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
})

router.get('/login', function (req, res) {
  res.render('login')
})

router.get('/categories', function (req, res) {
  res.render('categories')
})

module.exports = router
