const Bar = require('../models/Bar');
const Beer = require('../models/Beer');

module.exports = {
    index: function(req, res, next){
        Bar.find({}, function(err, bars){
            if(err) return next(err);
            res.render('bars/index', {title: 'Bar List',bars});
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
        Bar.findById(req.params.id).populate('beers').exec(function(err, bar) {
            if (err) return next(err);
            Beer.find({}, function(err, beers){
                res.render('/bars/show', {beers, bar});
            })
        });
    },
    addBeer: function(req, res, next){
        Bar.findById(req.params.id, function(err, bar){
            if (err) return next(err);
            Beer.findById(req.body.beer, function(err, beer){
                bar.beers.push(beer);
                bar.save(err, function(){
                    if (err) return next(err);
                    beer.bars.push(bar);
                    beer.save(err, function(){
                        if (err) return next(err);
                        res.redirect('/bars/' + bar._id);
                    })
                })
            })
            
        })
    },
    removeBeer: function(req, res, next){
        Bar.findById(req.params.id, function(err, bar){
            if (err) return next(err);
            bar.beers.remove(beer);
            bar.save(err, function(){
                Beer.findById(req.params.id, function(err){             
                    if (err) return next(err);
                    beer.bars.remove(bar);
                    bar.save(err, function(){
                        if (err) return next(err);
                        res.redirect('/bars/' + bar._id)
                    });
                })
            })
        })
    },
    destroy: function(req, res, next){
        Bar.remove({_id:req.params.id}, function(err){
            if (err) return next(err);
            res.redirect('/bars');
        })
    }
}