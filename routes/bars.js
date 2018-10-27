var express = require('express');
var router = express.Router();
var bars = require('../controllers/barsController');

// get all
router.get('/', bars.index);
//add form
router.get('/new', bars.new);
// get one
router.get('/:id', bars.show);
// post new bar
router.post('/', bars.create);
// new beer to bar
router.post('/:id/beers', bars.addBeer);
// delete a bar
router.delete('/:id', bar.destroy);
