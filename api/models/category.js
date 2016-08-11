var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CategorySchema = new Schema({
  category: String
})

CategorySchema.pre('save', function (next) {
  var now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})

module.exports = mongoose.model('Category', CategorySchema)
