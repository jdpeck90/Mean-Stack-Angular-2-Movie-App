var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    bookName: String,
    bookYear: Number,
    bookRating: Number
});


var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
