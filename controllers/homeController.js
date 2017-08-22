var Book = require('../models/book')

exports.saveNewBook = function(req, res, next) {
    Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year
    }, function(err, book) {
        if (err) console.error(err);
        res.send({
            success: true,
            book: book
        })
    });
}