/**
 * 获取用户输入的处理
 */
"use strict";
var chalk = require('chalk');
var inquirer = require('inquirer');
var user = process.env.USERNAME || process.env.USER;

function getParams (userParams, callback) {
    inquirer.prompt([
        {
            type: "list",
            name: "pageType",
            message: chalk.yellow('selec your template type => '),
            choices: [ "legend", "page", "page-widget"],
            default: 'page',
            filter: function( val ) { return val.toLowerCase(); }
        },
        {
            type: 'input',
            name: 'pageid',
            message: chalk.yellow('give me your pageid from h5 system => '),
            filter: function (val) {
                return val.trim().toLowerCase();
            }
        },
        {
            type: 'input',
            name: 'author',
            message: 'author',
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

module.exports = command;
