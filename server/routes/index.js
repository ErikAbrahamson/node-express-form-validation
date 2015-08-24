var express = require('express');
var router = express.Router();

//Global array;
var puppyArray = [];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Puppies!' });
});

router.post('/submit', function(req, res, next) {
  var puppyInputName = req.body.puppyName;
  var puppyInputID = req.body.puppyID;
  var errors = puppyValidationCheck(puppyInputName, puppyInputID);
  if (errors) {
    res.render('index', {
      title: 'Errors',
      errors: errors
    });
  } else {
    puppyArray.push({
      name: puppyInputName,
      id: puppyInputID
    });
    res.render('puppies', {
      puppies: puppyArray,
      success: 'You\'ve just added a new puppy!'
    });
  }
});

function puppyValidationCheck(puppyName, puppyID) {
  var errorArray = [];
  var puppyNameTrimmed = puppyName.trim();
  var puppyIDTrimmed = puppyID.trim();
  if(puppyNameTrimmed === '') {
    errorArray.push("Name cannot be blank.");
  }
  if(puppyIDTrimmed === '') {
    errorArray.push('ID cannot be blank.');
  } else if (puppyIDTrimmed.length < 3) {
    errorArray.push('An ID must be at least 3 characters long.');
  }
  return errorArray;
}
module.exports = router;
