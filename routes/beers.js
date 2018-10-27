var express = require('express');
var router = express.Router();
var beers = require('../controllers/beersController');

// get all
router.get('/', beers.index);
// add form
router.get('/new', beers.new);
// get one
router.get('/:id', beers.show);
// post new beer
router.post('/', beers.create);
// create comment
router.post('/:id/comments', beers.createcomment);
// delete a beer
router.delete('/:id', beers.destroy);