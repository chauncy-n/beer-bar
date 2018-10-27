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

module.exports = mongoose.model('Beer', beerSchema);
