var fs = require('fs');
var str = fs.readFileSync('ascii2.txt');
var chalk = require('chalk');
str = str.toString().replace(/hello\s+h5gen/g, chalk.red('hello h5gen'));
str = str.replace(/bravo\s+generaotor/g, chalk.yellow('bravo generaotor'));
str = str.replace('quickly for your app',chalk.green('quickly for your app'));
console.log(str);


var str2 = fs.readFileSync('ascii3.txt').toString();
str2 = str2.replace('(.)(.)', chalk.red('(.)(.)'));
str2 = str2.replace('Bravo H5 Gen!', chalk.green('Bravo H5 Gen!'));
str2 = str2.replace("\\\\\\///", chalk.yellow("\\\\\\///"));
console.log(str2);
