/**
 *  tplreq
 *  根据用户输入的参数去系统请求获得页面的配置数据
 *  返回promise
 *
 *
 */

"use strict";

var chalk = require('chalk');
var http = require('http');
var querystring = require('querystring');
var Q = require('q');
exports.getConfig = function  (config, callback) {
    var deferred = Q.defer();
    var reqObj = {
        pageType: config.pageid || '',
        id: '28d4f3ca-7643-11e5-85d7-70e2840c1e14',
        _data: 1,
    };
    let paramstring = querystring.stringify(reqObj);
    let prefixUrl = 'http://shushuo.baidu.com/legend/dev/?';
    let url = prefixUrl + paramstring;
    console.log(chalk.red(paramstring));
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
                deferred.resolve(JSON.parse(resText));
            }
            catch(e) {
                deferred.reject(e);
                console.error('error in httpreq => ' + e);
            }
        });
    });

    return deferred.promise;
    // return deferred.promise.nodeify(callback);
}
