const Bar = require('../models/Bar');
const Beer = require('../models/Beer');

module.exports ={
    index: function(req, res, next){
        Beer.find({}, function(err, beers){
            if (err) return next(err);
            res.render('beers/index', {beers});
        })
    },
    new: function(req, res, next){
        res.render('beers/new');
    },
    create: function(req, res, next){
        let data = req.body;
        beer.create({
            name: data.name,
            style: data.style
        }, function(err,){
            if (err) return next(err);
            res.redirect('/beers')
        })
    },
}