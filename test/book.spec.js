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

    it('Should be invalid if year is string', function (done) {
        var newBook = new Book({
            title: 'test',
            author: 'test',
            genre: 'test',
            year: '1'
        });

        newBook.validate(function (err) {
            expect(err.errors.year).to.exist;
            done();
        });
    });
});
