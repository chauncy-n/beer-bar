const Bar = require('../models/Bar');
const Beer = require('../models/Beer');

module.exports = {
    index: function(req, res, next){
        Bar.find({}, function(err, bars){
            if(err) return next(err);
            res.render('bars/index', {bars});
        });
    },
    new: function(req, res, next){
        res.render('bars/new');
    },
    create: function(req, res, next){
        let data = req.body;
        Bar.create({
            name: data.name,
            location: data.location
        }, function(err){
            if(err) return next(err);
            res.redirect('/bars');
    });
    },
    show: function (req, res, next){
        Bar.findById(req.params.id, function(err, bar){
            if (err) return next(err);
            res.render('/bars/show', {bar});
        });
    },
    addBeer: function(req, res, next){
        Bar.findById(req.params.id, function(err, bar){
            if (err) return next(err);
            newBeer = {
                name: req.body.name,
                style: req.body.style
            }
        })
    }
}