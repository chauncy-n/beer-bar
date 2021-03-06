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
// remove a beer
router.get('/:id/beers/:cid/remove', bars.removeBeer)
// delete a bar
router.delete('/:id', bars.destroy);

// ? router.delete('/:barId/beers/beerId', bar.destroy);

module.exports = router;