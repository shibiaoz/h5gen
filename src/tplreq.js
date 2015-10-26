/**
 * tplreq
 *  根据用户输入的参数去系统请求获得页面的配置数据
 *
 */

"use strict";

var chalk = require('chalk');
var http = require('http');
exports.getConfig = function  (config, callback) {
    console.log(chalk.red('getConfig'));
}
