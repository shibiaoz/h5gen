#!/usr/bin/env node

var shell = require('shelljs');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var readline = require('readline');
var inquirer = require('inquirer');
var fs = require('fs');
var pwd = shell.pwd(); // h5gen/
var FeDeployConf = '';
var user = process.env.USERNAME || process.env.USER;
var userParams = {};
var command = require('./command');
var tplreq = require('./tplreq');


console.log(yosay(chalk.green('To Geneate tempatle....')));

// 判断路径是否是可执行目录，通过判断是否找到deplay-conf.js来判断
var deployConf = path.relative(pwd, '../deploy-conf.js');
if (fs.existsSync(deployConf)) {
    console.log(chalk.red(deployConf+ ' => exists'));

}
else {
    console.log(chalk.yellow(deployConf+ ' => exists'));
}

command.getParams(userParams, function (userParams) {
    console.log("sdfs=> " + JSON.stringify(userParams));

    tplreq.getConfig();
});




