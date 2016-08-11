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
        categories: ['cafe', 'confectionery'],
        contact: {
          address: '65 Airport Boulevard',
          tel: 'Tel: +65 62149521',
          website: 'http://www.changiairport.com/shopping-and-dining/dining/panopolis'
        }
      },
      {
        name: 'Marina Bay Steamboat @ Satay By the Bay',
        url: 'http://www.anythinghalal.com/listing/marina-bay-steamboat-satay-bay/',
        location: {
          address: '18 Marina Gardens Drive',
          locality: 'Marina Bay',
          city: 'Singapore',
          latitude: '1.2811198',
          longitude: '103.865893',
          zipcode: '018953'
        },
        featured_image: '',
        description: 'There’s a new Steamboat buffet in town! Marina Bay Steamboat @ Satay By the Bay. Fresh seafood and halal! $25 nett on Weekdays, $27 nett on weekends, inclusive of free flow soft drinks!',
        categories: ['buffet'],
        contact: {
          address: '18 Marina Gardens Drive',
          tel: '',
          website: ''
        }
      },
      {
        name: 'Ooriginal',
        url: 'http://www.anythinghalal.com/listing/ooriginal/',
        location: {
          address: '430 Upper Changi Road , #01-14 , East Village',
          locality: 'East Village',
          city: 'Singapore',
          latitude: '1.332673',
          longitude: '103.9467344',
          zipcode: '487048'
        },
        featured_image: '',
        description: 'Overdose Malaysia is now in Singapore. No more crossing the causeway for this drink!',
        categories: ['cafe', 'western'],
        contact: {
          address: '430 Upper Changi Road , #01-14 , East Village',
          tel: 'Tel: + 65 96510303',
          website: ''
        }
      },
      {
        name: 'T Bob’s Corner',
        url: 'http://www.anythinghalal.com/listing/527-bedok-north-street-3-01-514-singapore-460527-t-bobs-corner/',
        location: {
          address: '527 #01-154 Bedok North Street 3',
          locality: 'Bedok North',
          city: 'Singapore',
          latitude: '1.3340423',
          longitude: '103.928382',
          zipcode: '460527'
        },
        featured_image: '',
        description: 'Muslim-owned Steakhouse and Family Restaurant. Enjoy a hearty meal in a rustic, relaxed atmosphere set in the heartlands. Juicy tenderloin, and sirloin steaks, crispy fish & chips, grilled fish, pasta and more, and finish off with fried ice cream.',
        categories: ['cafe', 'western'],
        contact: {
          address: 'Blk 527, Bedok North Street 3, #01-514 Singapore 460527',
          tel: 'Tel: + 65 6449 8527',
          website: 'https://www.facebook.com/tbobscorner'
        }
      },
      {
        name: 'The Bread Gang',
        url: 'http://www.anythinghalal.com/listing/the-bread-gang/',
        location: {
          address: '235 Jurong East Street 21',
          locality: 'Jurong East',
          city: 'Singapore',
          latitude: '1.3399705',
          longitude: '103.7421814',
          zipcode: '600235'
        },
        featured_image: '',
        description: 'Serving classic sandwiches and nachos at the heartland',
        categories: ['cafe', 'western'],
        contact: {
          address: 'Blk 235 Jurong East Street 21, Jurong East Singapore 600235',
          tel: '',
          website: ''
        }
      }
    ]
  },
  {
    'model': 'Category',
    'documents': [
      {
        category: 'buffet'
      },
      {
        category: 'cafe'
      },
      {
        category: 'confectionery'
      },
      {
        category: 'restaurant'
      },
      {
        category: 'frozen'
      },
      {
        category: 'fine dining'
      },
      {
        category: 'coffesshop'
      },
      {
        category: 'fastfood'
      },
      {
        category: 'catering'
      },
      {
        category: 'kiosk'
      },
      {
        category: 'dessert'
      },
      {
        category: 'casual dining'
      },
      {
        category: 'western'
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
