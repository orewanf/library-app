var Book = require('../models/book')

exports.saveNewBook = function(req, res, next) {
    Book.create({
        title: req.body.title.trim(),
        author: req.body.author.trim(),
        genre: req.body.genre.trim(),
        year: req.body.year.trim()
    }, function(err, book) {
        if (err) {
            console.error(err);
            res.send({
                success: false,
                book: book
            })
        } else {
            res.send({
                success: true,
                book: book
            })
        }
    });
}

exports.getBookList = function(req, res, next) {
    Book.find().exec(function(err, results) {
        if (err) {
            console.error(err);
            res.send({
                success: false,
                bookList: results
            })
        } else {
            res.send({
                success: true,
                bookList: results
            })
        }
    });
}

exports.updateBook = function (req, res, next) {
    if (typeof(req.body.year) === 'number') req.body.year = req.body.year.toString()
    Book.findByIdAndUpdate({_id: req.body.id}, {
        title: req.body.title.trim(),
        author: req.body.author.trim(),
        genre: req.body.genre.trim(),
        year: req.body.year.trim()
    }, function (err, book) {
        console.log('test');
        if (err) {
            console.error(err)
            res.send({
                success: false,
                book: book
            });
        } else {
            res.send({
                success: true,
                book: book
            });
        }
    });
}

exports.deleteBook = function (req, res, next) {
    Book.remove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            res.send({
                success: false
            });
        } else {
            res.send({
                success: true
            });
        }
    })
}