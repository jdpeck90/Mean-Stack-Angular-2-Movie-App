var mongoose = require('mongoose');

var musicSchema = mongoose.Schema({
    musicName: String,
    musicYear: Number,
    musicRating: Number
});


var Music = mongoose.model('Music', musicSchema);

module.exports = Music;
