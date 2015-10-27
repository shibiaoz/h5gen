var fs = require('fs');
var chalk = require('chalk');
var path = require('path');
function say() {
    console.log(chalk.red(path.join(__dirname,'ascii.txt')));
    var str = fs.readFileSync(path.join(__dirname,'ascii.txt')).toString();
    str = str.replace('(.)(.)', chalk.red('(.)(.)'));
    str = str.replace('Bravo H5 Gen!', chalk.green('Bravo H5 Gen!'));
    str = str.replace("\\\\\\///", chalk.yellow("\\\\\\///"));
    console.log(str);
}

exports.say = say;
