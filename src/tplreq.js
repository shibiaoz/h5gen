/**
 *  tplreq
 *  根据用户输入的参数去系统请求获得页面的配置数据
 *  返回promise
 *
 *
 */

"use strict";

var debug = false;
var chalk = require('chalk');
var http = require('http');
var querystring = require('querystring');
var Q = require('q');

// 构建请求的url对应关系
var CONGIGURL = {
    "legend": 'http://cp01-hj-lh-sandbox-tech00.epc.baidu.com:8081/gen/page?',
    "page": '',
    "page-widget": '',
}
if (debug) {
    CONGIGURL['legend'] = 'http://127.0.0.1:8081/gen/page?';
}
exports.getConfig = function  (config, callback) {
    var deferred = Q.defer();
    var reqObj = {
        pageType: config.pageType || '',
        pageid: config.pageid,
        author: config.author,
    };
    let paramstring = querystring.stringify(reqObj);
    let prefixUrl = CONGIGURL[config.pageType];
    let url = prefixUrl + paramstring;
    console.log(chalk.red('输入参数=> ' + paramstring));
    console.log('url前缀' + prefixUrl);
    var httpReq = http.get(url);
    httpReq.on('error', function (e) {
        console.log(chalk.red('httpReq error => ' + e.message));
        deferred.reject(e);
    });
    httpReq.on('response', function (response) {
        let resText = '';
        response.on('data' , function (chunk) {
            resText += chunk;
        });
        response.on('end', function () {
            // deferred.resolve(resText);
            try {
                console.log(chalk.red("请求系统数据成功...."));
                deferred.resolve(JSON.parse(resText));
            }
            catch(e) {
                deferred.reject(e);
                console.log(chalk.red("请求系统数据失败或Parse 系统JSON士标...."));
            }
        });
    });

    return deferred.promise;
    // return deferred.promise.nodeify(callback);
}
