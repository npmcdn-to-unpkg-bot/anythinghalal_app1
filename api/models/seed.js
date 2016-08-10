// load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'api/models/listing.js',
    'api/models/category.js',
    'api/models/user.js'
  ])

  // Clear specified collections
  seeder.clearModels(['Listing', 'Category', 'User'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      console.log('Success!')
    })
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Listing',
    'documents': [
      {
        name: 'Panopolis Cafe & Bakery',
        url: 'http://www.anythinghalal.com/listing/panopolis-cafe-bakery/',
        location: {
          address: '65 Airport Boulevard',
          locality: 'Changi Airport',
          city: 'Singapore',
          latitude: '1.3559181',
          longitude: '103.9848129',
          zipcode: '819663'
        },
        featured_image: '',
        description: 'Panopolis offers simply delicious and inspiring sandwiches and pastries from around the world. At Panopolis, all breads are freshly baked and filled throughout the day. Using only the finest, deliciously fresh ingredients, Panopolis offers passengers tasty treats that never go stale.',
        categories: ['cafe', 'bakery'],
        contact: {
          address: '65 Airport Boulevard',
          tel: 'Tel: +65 62149521',
          website: 'http://www.changiairport.com/shopping-and-dining/dining/panopolis'
        }
      }
    ]
  },
  {
    'model': 'Category',
    'documents': [
      {
        category: 'cafe'
      },
      {
        category: 'bakery'
      }
    ]
  },
  {
    'model': 'User',
    'documents': [
      {
        username: 'yazid',
        email: 'flight846@gmail.com',
        password: 'rvf40046'
      }
    ]
  }
]
