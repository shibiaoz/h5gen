"use strict";
var http = require('http');
var path = require('path');
var chalk = require('chalk');
var fs = require('fs');
var readline = require('readline');
var Q = require('q');
var moment = require('moment');
var shell = require('shelljs');
var tplEng = require('./tplEng');
var js2php = require('./js2php');
var pwd = shell.pwd();
var FILESUFFIX = '.php';
// legend templat path,
var TMLPATH = path.join(__dirname, '../tpl/page-legend-base.php');
var CONTROLPATH = path.join(__dirname, '../tpl/base-control.php');
var user = process.env.USERNAME || process.env.USER;

function getData (jsUrl) {
    var promise = Q.promise(function (resolve, reject, notify) {
        http.get(jsUrl, function (response) {
            let resTxt = '';
            response.on('data', function (trunk) {
                resTxt += trunk;
            });
            response.on('end' , function () {
                resolve(resTxt);
            });
        }).on('error', function (err) {
            reject(err);
        });
    });
    return promise;
}
/**
 * 生成最基础的 control 模板，可以自定义
 * 存在logic-tpls 文件夹下
 * @param  {[type]} userParams [description]
 * @return {[type]}            [description]
 */
exports.genControlRaw = function  (userParams) {
    var logciTpls = path.relative(pwd, 'logic-tpls/');
    if (!fs.existsSync(logciTpls)) {
        shell.mkdir('-p', logciTpls);
    }
    var data = {
        desp: userParams.title || '入口文件',
        author: userParams.author,
        time: moment(new Date()).format('YYYY-MM-DD HH:mm'),
        pageConfig: '<%=pageConfig%>',
        template: '<%=template%>'
    }
    var pageName = userParams.title || 'test';
    var controlTplStr = fs.readFileSync(CONTROLPATH).toString();
    var desControlPath = path.join(pwd, 'logic-tpls/' + pageName + FILESUFFIX);
    var toWriteStr = tplEng.strRep(controlTplStr, data);
    fs.writeFileSync(desControlPath, toWriteStr,{ flags: 'w'});
}




/**
 * 生成页面的control ，针对legend·的数据把变量转换为PHP 变量
 *
 * @param  {[type]} userParams       用户通过命令行输入的参数
 * @param  {[type]} pageConfig 读取legend的配置数据
 * @return {[type]}                  promise
 */

exports.genControl = function (userParams, pageConfig) {
    console.log(chalk.yellow('function genControl...'));
    var deferred = Q.defer();
    var controlName = userParams.controlName;
    var selConPath = path.join(pwd, 'logic-tpls/' + controlName + '.tpl');
    // pageConfig.name = 'test';
    var pageName = pageConfig && (pageConfig.name || pageConfig.desp || 'test');
    console.log(chalk.green(selConPath));
    var controlTplStr = fs.readFileSync(selConPath).toString();
    // console.log(controlTplStr);
    var desControlPath = path.join(pwd, 'control/' + pageName + FILESUFFIX);
    // pageConfig.data = {}; // 扩展pageconfig的值
    // var dataJsUrl = pageConfig && pageConfig['dataJsUrl'];

    // 与模板替换的数据源
    var data = {
        desp: pageConfig.desp || pageConfig.title,
        author: user,
        template: pageName + '/' +  pageName + FILESUFFIX,
        time: moment(new Date()).format('YYYY-MM-DD HH:mm'),
        pageConfig: '',
    };

    data.pageConfig = js2php(pageConfig);
    // 读取模板文件，替换值，写入工程的control中
    if (controlTplStr) {
        console.log(chalk.green(' writing control tpl...'));
        var toWriteStr = tplEng.strRep(controlTplStr, data);
        fs.writeFile(desControlPath, toWriteStr, function (err) {
            if (err) throw err;
            console.log(chalk.green('writeFile control done...'));
            deferred.resolve('success');
        });

    }
    else {
        deferred.reject('read control tpl error');
    }

    return deferred.promise;
}

exports.genTempete = function (userParams, pageConfig) {
    console.log(chalk.green('filegen => genTempete '));
    // console.log(chalk.red(' 当前所在路径 => ' + pwd));
    // __dirname就是这个packaged 当前执行文件所在文件夹  绝对路径
    // pwd 是当前脚本执行路径
    // console.log(chalk.red('__dirname => ' + path.join(__dirname, "")));
    // pageConfig.name = 'test';
    var pageName = pageConfig && (pageConfig.name || pageConfig.desp || 'test');
    var templateDir = path.relative(pwd, 'template/' + pageName);
    var templatePath = path.relative(pwd, templateDir + '/' + pageName + FILESUFFIX);
    var isFileExists = shell.test('-f', templatePath);
    console.log(chalk.green( templatePath + '=> is exists ' + isFileExists));
    var cpFun = function (src, dest) {
        console.log(chalk.green('function cpFun...'));
        console.log(chalk.green('excute shell to mkdir'));
        shell.mkdir('-p', templateDir);
        shell.cp('-f', TMLPATH , templatePath);
        console.log(chalk.green('template genetated success'));
    }
    if (!isFileExists) {
        console.log(chalk.green("create template dir"))
        cpFun();
    }
    else {

        /**
         *  和勇叔讨论把逻辑修改放在templte 中
         * 对公用的数据的修改逻辑放到模板的control中
         * 这样每次重新生成control 文件
         */

        return false;
        console.log(chalk.yellow('template alreay exists => ' + templatePath));
        var rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout,
        });
        rl.question("overwrite yes or no?\n",function(answer){
            if(answer.indexOf('y') > -1) {
                // yes to voerwrite
                cpFun();
            }
        });
    }
}
exports.getData = getData;
