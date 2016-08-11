var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ListingSchema = new Schema({
  name: String,
  url: String,
  location: {
    address: String,
    locality: String,
    city: String,
    latitude: String,
    longitude: String,
    zipcode: String
  },
  featured_image: String,
  description: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  contact: {
    address: String,
    tel: String,
    website: String
  },
  created_by: { type: String, ref: 'User' },
  created_at: Date,
  updated_at: Date
})

ListingSchema.pre('save', function (next) {
  var now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})

module.exports = mongoose.model('Listing', ListingSchema)
