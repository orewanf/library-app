var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var mongoose = require('mongoose');
require('sinon-mongoose');
var Book = require('../models/book');

describe('Book', function () {
    it('Should be invalid if all properties is empty', function (done) {
        var newBook = new Book();

        newBook.validate(function (err) {
            expect(err.errors).to.exist;
            done();
        });
    });

    it('should return all books', function (done) {
        var BookMock = sinon.mock(Book);
        var expectedResult = {status: true, book: []};
        BookMock.expects('find').yields(null, expectedResult);
        Book.find(function (err, result) {
            BookMock.verify();
            BookMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
});
