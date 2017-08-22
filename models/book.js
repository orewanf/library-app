var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  genre: {type: String, required: true},
  year: {type: Number, required: true}
});

//Export model
module.exports = mongoose.model('Book', BookSchema);