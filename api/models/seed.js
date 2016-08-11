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
        latitude: '1.3559181',
        longitude: '103.9848129',
        featured_image: '',
        description: 'Panopolis offers simply delicious and inspiring sandwiches and pastries from around the world. At Panopolis, all breads are freshly baked and filled throughout the day. Using only the finest, deliciously fresh ingredients, Panopolis offers passengers tasty treats that never go stale.',
        categories: [],
        address: '65 Airport Boulevard',
        tel: '+65 62149521',
        website: 'http://www.changiairport.com/shopping-and-dining/dining/panopolis',
        created_by: ''
      },
      {
        name: 'Marina Bay Steamboat @ Satay By the Bay',
        url: 'http://www.anythinghalal.com/listing/marina-bay-steamboat-satay-bay/',
        latitude: '1.2811198',
        longitude: '103.865893',
        featured_image: '',
        description: 'There’s a new Steamboat buffet in town! Marina Bay Steamboat @ Satay By the Bay. Fresh seafood and halal! $25 nett on Weekdays, $27 nett on weekends, inclusive of free flow soft drinks!',
        categories: [],
        address: '18 Marina Gardens Drive',
        tel: '',
        website: '',
        created_by: ''
      },
      {
        name: 'Ooriginal',
        url: 'http://www.anythinghalal.com/listing/ooriginal/',
        latitude: '1.332673',
        longitude: '103.9467344',
        featured_image: '',
        description: 'Overdose Malaysia is now in Singapore. No more crossing the causeway for this drink!',
        categories: [],
        address: '430 Upper Changi Road , #01-14 , East Village',
        tel: '+ 65 96510303',
        website: '',
        created_by: ''
      },
      {
        name: 'T Bob’s Corner',
        url: 'http://www.anythinghalal.com/listing/527-bedok-north-street-3-01-514-singapore-460527-t-bobs-corner/',
        latitude: '1.3340423',
        longitude: '103.928382',
        featured_image: '',
        description: 'Muslim-owned Steakhouse and Family Restaurant. Enjoy a hearty meal in a rustic, relaxed atmosphere set in the heartlands. Juicy tenderloin, and sirloin steaks, crispy fish & chips, grilled fish, pasta and more, and finish off with fried ice cream.',
        categories: [],
        address: 'Blk 527, Bedok North Street 3, #01-514 Singapore 460527',
        tel: '+ 65 6449 8527',
        website: 'https://www.facebook.com/tbobscorner',
        created_by: ''
      },
      {
        name: 'The Bread Gang',
        url: 'http://www.anythinghalal.com/listing/the-bread-gang/',
        latitude: '1.3399705',
        longitude: '103.7421814',
        featured_image: '',
        description: 'Serving classic sandwiches and nachos at the heartland',
        categories: [],
        address: 'Blk 235 Jurong East Street 21, Jurong East Singapore 600235',
        tel: '',
        website: '',
        created_by: ''
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
        name: 'yazid',
        email: 'flight846@gmail.com',
        password: 'rvf40046',
        listings: []
      }
    ]
  }
]
