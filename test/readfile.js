var fs = require('fs');
var str = fs.readFileSync('../ascii.txt');
var chalk = require('chalk');
str = str.toString().replace(/hello\s+h5gen/g, chalk.red('hello h5gen'));
console.log(str);
