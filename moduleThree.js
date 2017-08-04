var accountBalance = require('./convertToDollars.js');

var random = require('./randomNumber.js');

var finalBalance = accountBalance(random(100, 1000000));

console.log(finalBalance);