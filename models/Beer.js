var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment: String,
}, {
    timestamps: true
});

var beerSchema = new Schema({
    name: String,
    style: String,
    comments: [commentSchema],
    bars: [{type: Schema.Types.ObjectId, ref: 'Bar'}]
}, {
    timestamps: { createdAt: 'created_at' }
});

beerSchema.post('remove', function(beerInfo) {
	var Bar = this.model('Bar');
	Bar.find({beers: beerinfo._id}, function(err, bars) {
		bars.forEach(function(beerinfo) {
			barInfo.beers.remove(beerInfo._id);
			barInfo.save();
		});
	});	
});

module.exports = mongoose.model('Beer', beerSchema);
