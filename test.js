var simple = require('./test-module.js');
var dbcommand = require('./dbcommand.js');

// This will throw an error!
console.log('check user : ' + dbcommand.checkUser('Uc6b83ca95eab774d4ddde09d10faae56'));

dbcommand.completeUser('Uc6b83ca95eab774d4ddde09d10faae56');
