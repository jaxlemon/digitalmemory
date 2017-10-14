var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memorylist.ejs', { title: 'DigitalMemoryList', layout: 'layout.ejs' });
});

module.exports = router;
