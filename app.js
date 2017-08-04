var express = require('express');

var app = express();

var port = 3000;

var random = require('./randomNumber.js');

console.log(random);


app.listen(port, function() {
    console.log('Listening on port ', port);

})