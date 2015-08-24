var express = require('express');
var router = express.Router();

//Global array;
var puppyArray = [];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Puppies!' });
});

router.post('/submit', function(req, res, next) {
  puppyArray.push({
    name: req.body.puppyName,
    id: req.body.puppyID
  });
  console.log(puppyArray);
  res.render('puppies');
});
module.exports = router;
