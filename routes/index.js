var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.njk');
});

router.post('/api/add-new-book', homeController.saveNewBook);
router.post('/api/get-book-list', homeController.getBookList);
router.put('/api/update-book', homeController.updateBook);
router.delete('/api/delete-book/:id', homeController.deleteBook);

module.exports = router;
