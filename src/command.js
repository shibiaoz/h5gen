/**
 * 获取用户输入的处理
 */
"use strict";
var chalk = require('chalk');
var inquirer = require('inquirer');
var tplslist = require('./tplslist');
var user = process.env.USERNAME || process.env.USER;
var params = process.argv.slice(2);
var TPLTYPE = ['tem','tpl','template'];
// genType
// 1 代表是成本 control
// 2 是代表生成一个完整的应用

function commandCenter(callback) {
    console.log(chalk.green('***********自定义生成control模板**************'));
    var userParams = {};
    var tplType = '';
    var name = '';
    if (params.length) {
        tplType = params[0];
        name = params[1];
        getGenControlParams({genType: 1}, callback);
    }
    else {
        getParams({genType: 2}, callback);
    }
    return userParams;
}

/**
 * 制取生成 控制器的模板
 * @param  {[type]}   userParams [description]
 * @param  {Function} callback   [description]
 * @return {[type]}              [description]
 */
function getGenControlParams (userParams, callback) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'controlName',
            message: chalk.yellow('controlName => '),
            filter: function (val) {
                return val.trim().toLowerCase();
            }
        },
        {
            type: 'input',
            name: 'title',
            message: chalk.yellow('自定义模板的描述'),
            default: 'test',
            filter: function  (val) {
                return val || 'test';
            }
        },
        {
            type: 'input',
            name: 'author',
            message: '作者',
            default: user,
            filter: function (val) {
                return val.trim().toLowerCase() || user;
            }
        }
    ], function (answers) {
        userParams.controlName = answers.controlName;
        userParams.title = answers.title;
        userParams.author = answers.author;
        // write to yaml
        tplslist.genYaml(null, {
            title: userParams.title,
            name: userParams.controlName
        });
        callback && callback(userParams);
    });
}

function getParams (userParams, callback) {
    var yamlConfig = tplslist.getList();
    var list = yamlConfig && yamlConfig.tpls;
    var names = list.map(function  (obj) {
        return obj.name;
    });
    inquirer.prompt([
        {
            type: "list",
            name: "pageType",
            message: chalk.yellow('选择页面类型 => '),
            choices: [ "legend", "page", "page-widget"],
            default: 'page',
            filter: function( val ) { return val.toLowerCase(); }
        },
        {
            type: "list",
            name: "controlName",
            message: chalk.yellow('controlName => '),
            choices: names,
            default: 'page',
            filter: function( val ) { return val.toLowerCase(); }
        },
        {
            type: 'input',
            name: 'pageid',
            message: chalk.yellow('页面_id => '),
            filter: function (val) {
                return val.trim().toLowerCase();
            }
        },
        {
            type: 'input',
            name: 'author',
            message: '作者',
            default: user,
            filter: function (val) {
                return val.trim().toLowerCase() || user;
            }
        }
    ], function (answers) {
        //console.log(answers);
        userParams.author = answers.author;
        userParams.pageid = answers.pageid;
        userParams.pageType = answers.pageType;
        userParams.controlName = answers.controlName;
        callback && callback(userParams);
    });
}


function command(userParams) {
    this.init();
}
command.prototype.getParams = function() {
    getParams(this.userParams);
}
command.getParams = getParams;

command.commandCenter = commandCenter;

module.exports = command;
