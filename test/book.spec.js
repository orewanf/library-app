var expect = require('chai').expect;
var Book = require('../models/book');

describe('book', function () {
    it('Should be invalid if all properties is empty', function (done) {
        var newBook = new Book();

        newBook.validate(function (err) {
            expect(err.errors).to.exist;
            done();
        });
    });
});
