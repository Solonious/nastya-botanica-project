var express = require('express');
var router = express.Router();

var name;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express',
    name: 'Sergii'
   });
});

module.exports = router;
