var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barSchema = new Schema({
    name: String,
    location: String,
    beers: [{type: Schema.Types.ObjectId, ref: 'Beer'}]
    
}, {
    timestamps: true
});
barSchema.post('remove', function(barInfo){
    var Beer = this.model('Beer');
    Beer.find({bars: barInfo._id}, function(err, beers){
        beers.forEach(function(barInfo){
            beerInfo.bars.remove(barInfo._id);
            barInfo.Save();
        });
    });
});


module.exports = mongoose.model('Bar', barSchema);