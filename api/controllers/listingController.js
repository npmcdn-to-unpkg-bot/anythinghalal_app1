var Listing = require('../models/listing')

function listListings (req, res) {
  Listing.find((err, listingsArray) => {
    if (err) return res.status(404).json({message: 'Listings not found'})
    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    var simplifiedList = []
    for (var i = 0; i < listingsArray.length; ++i) {
      simplifiedList.push(
                        { id: listingsArray[i].id,
                          name: listingsArray[i].name,
                          url: listingsArray[i].url,
                          longitude: listingsArray[i].longitude,
                          latitude: listingsArray[i].latitude,
                          featured_image: listingsArray[i].featured_image,
                          description: listingsArray[i].description,
                          categories: listingsArray[i].categories,
                          address: listingsArray[i].address,
                          tel: listingsArray[i].tel,
                          website: listingsArray[i].website,
                          created_by: listingsArray[i].created_by,
                          created_at: listingsArray[i].created_at,
                          updated_at: listingsArray[i].updated_at
                        })
    }
    res.status(200).json(simplifiedList)
  })
}

function showListing (req, res) {
  Listing.findById({_id: req.params.id}, (err, listing) => {
    if (err) return res.status(404).json({message: 'Listing not found'})

    res.status(200).json(listing)
  })
}

function createListing (req, res) {
  var listing = new Listing(req.body)
  console.log(req.body)
  console.log(req)
  listing.save((err, listing) => {
    if (err) return res.status(401).json({error: 'Listing save Error'})
    res.status(200).json({message: 'Listing created! yay! ', listing})
  })
}

function updateListing (req, res) {
  Listing.findById({_id: req.params.id}, function (err, listing) {
    if (err) return res.status(401).json({error: 'Cannot update listing'})
    listing = req.body.listing
    listing.save(function (err) {
      if (err) return res.status(401).json({error: 'Listing save error. cant find listing to update'})
      res.status(200).json({message: 'Listing updated! yay! ', listing})
    })
  })
}

function removeListing (req, res) {
  Listing.findById({_id: req.params.id}, function (err, listing) {
    if (err) return res.status(401).json({error: 'Remove listing error. cant find listing to remove'})
    listing.remove(function (err) {
      if (err) return res.status(401).json({error: 'Listing remove error. cant remove listing'})
      res.status(200).json({message: 'Listing removed! Yay!'})
    })
  })
}

module.exports = {
  index: listListings,
  show: showListing,
  create: createListing,
  update: updateListing,
  remove: removeListing
}
