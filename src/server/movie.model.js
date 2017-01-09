var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    movieName: String,
    movieYear: Number,
    movieRating: Number
});

var Movie = mongoose.model('Movie', movieSchema);


module.exports = Movie;
