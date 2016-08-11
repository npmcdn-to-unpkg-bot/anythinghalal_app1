var Category = require('../models/category')

function listCategories (req, res) {
  Category.find((err, categoriesArray) => {
    if (err) return res.status(404).json({message: 'Categories not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    var simplifiedList = []
    for (var i = 0; i < categoriesArray.length; ++i) {
      simplifiedList.push({id: categoriesArray[i].id, skill: categoriesArray[i].category})
    }
    res.status(200).json(simplifiedList)
  })
}

function showCategory (req, res) {
  Category.findById({_id: req.params.id}, (err, category) => {
    if (err) return res.status(404).json({message: 'Category not found'})

    res.status(200).json(category)
  })
}

function createCategory (req, res) {
  var category = new Category(req.body)
  category.save((err, category) => {
    if (err) return res.status(401).json({error: 'Category update Error'})
    res.status(200).json({message: 'Category created! yay! ', category})
  })
}

function removeCategory (req, res) {
  Category.findById({_id: req.params.id}, function (err, category) {
    if (err) return res.status(401).json({error: 'Remove category error. cant find category to remove'})
    category.remove(function (err) {
      if (err) return res.status(401).json({error: 'Category remove error. cant remove category'})
      res.status(200).json({message: 'Category removed! Yay!'})
    })
  })
}

module.exports = {
  index: listCategories,
  show: showCategory,
  create: createCategory,
  remove: removeCategory
}
