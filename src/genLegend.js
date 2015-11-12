#!/usr/bin/env node

var shell = require('shelljs');
var chalk = require('chalk');
// var yosay = require('yosay');
var path = require('path');
var readline = require('readline');
var inquirer = require('inquirer');
var fs = require('fs');
var pwd = shell.pwd(); // h5gen/
var FeDeployConf = '';
var user = process.env.USERNAME || process.env.USER;
var userParams = {};
var mysay = require('./mysay');
var command = require('./command');
var tplreq = require('./tplreq');
var filegen = require('./filegen');


//console.log(yosay(chalk.green('To Geneate tempatle....')));
// 不用yo的生成图标了，http://boxes.thomasjensen.com/ 还不错
mysay.say();


// 判断路径是否是可执行目录，通过判断是否找到deplay-conf.js来判断
var deployConf = path.relative(pwd, 'deploy-conf.js');
console.log(chalk.green(' 当前所在路径 => ' + pwd));
if (true || fs.existsSync(deployConf)) {
    console.log(chalk.green(deployConf+ ' =>  配置文件存在，位置是对的'));
}
else {
    console.log(chalk.yellow(deployConf+ ' => 配置deploy-conf文件不存在或者运行位置不对'));
    shell.exit(1);
}

/**
 * userParams 用户输入的
 * @param
 */
command.commandCenter(function (userParams) {
    console.log(userParams);
    if (userParams.genType == 1) {
        // 生成一个自定义的control 文件
        filegen.genControlRaw(userParams);
    }
    else {
        tplreq.getConfig(userParams).done(function (result) {
            // resutlt 是指 请求
            filegen.genControl(userParams, result);
            filegen.genTempete(userParams, result);
        });
    }
});

/*
command.commandCenter(userParams, function (userParams) {
    console.log('进入命令行回调处理');
    // 从系统中拉取数据配置
    tplreq.getConfig(userParams).done(function (result) {
        // resutlt 是指 请求
        // console.log(result);
        filegen.genControl(userParams, result);
        filegen.genTempete(userParams, result);
    });
});
*/




