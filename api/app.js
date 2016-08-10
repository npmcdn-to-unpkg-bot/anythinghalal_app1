var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var dotenv = require('dotenv').config({silent: true})

// API Express App
// ---------------
var app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, User-Email, Auth-Token')
  res.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, DELETE, OPTIONS')
  next()
})

mongoose.connect(process.env.MONGODB_URI)

// Routes
// ------

// ROUTES
var router = require('./routes/index')
app.use('/', router)

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})

// Exports
// -------

module.exports = app
