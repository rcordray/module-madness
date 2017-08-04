var express = require('express');

var app = express();

var port = 3000;

var random = require('./randomNumber.js');

var dollar = require('./convertToDollars.js')

console.log(random);
console.log(dollar);



app.listen(port, function() {
    console.log('Listening on port ', port);

})