var http = require('http');
var path = require('path');
var chalk = require('chalk');
var fs = require('fs');
var Q = require('q');
var shell = require('shelljs');
var pwd = shell.pwd();
var FILESUFFIX = '.php';

// legend templat path,
var TMLPATH = path.relative(pwd, 'page-legend-base.php');


/**
 * 生成页面的control ，针对legend·的数据把变量转换为PHP 变量
 *
 * @param  {[type]} userParams       用户通过命令行输入的参数
 * @param  {[type]} pageConfig 读取legend的配置数据
 * @return {[type]}                  promise
 */

exports.genControl = function (userParams, pageConfig) {
    var deferred = q.defer();
}

exports.genTempete = function (userParams, pageConfig) {
    console.log(chalk.red('pwd => ' + pwd));
    console.log(chalk.red('__dirname => ' + path.join(__dirname, "")));
    return;
    var pageName = pageConfig && (pageConfig.name || pageConfig.title || 'test');
    var templateDir = path.relative(pwd, '../template/' + pageName);
    var templatePath = path.relative(pwd, '../template/' + pageName + FILESUFFIX);

    var isFileExists = shell.test('-f', templatePath);
    if (!isFileExists) {
        shell.mkdir('-p', templateDir);
        shell.cp(TMLPATH , templateDir);
        console.log(chalk.red('template genetated success'));
    }
    else {
        console.log(chalk.yellow('template alreay exists => ' + templatePath));
    }
}
