"use strict";
// https://github.com/KnightBubble/grunt-json2php
//  虽然star 比较少，不过能凑合用，明天多测试下
//
var _ = require('lodash');

module.exports = function (data, options) {
    options = _.extend({
        compress: false
    }, options);

    var comma = ', ';
    var arrow = ' => ';

    if (options.compress) {
        arrow = arrow.trim();
        comma = comma.trim();
    }

    var convert = function (obj) {
        switch (Object.prototype.toString.call(obj)) {
            case '[object Boolean]':
                return obj ? 'true' : 'false';
            case '[object String]':
                return '"' + obj.replace(/\\/g, '\\\\').replace(/\"/g, '\\"') + '"';
            case '[object Number]':
                return String(obj);
            case '[object Array]':
                return 'array(' +
                    obj.map(convert).join(comma) +
                ')';
            case '[object Object]':
                return 'array(' +
                    _.map(obj, function (v, k) {
                        return '"' + k + '"' + arrow + convert(v);
                    }).join(comma) +
                ')';
        }

        return 'null';
    };

    data = JSON.parse(JSON.stringify(data)); // remove non-JSON properties

    return convert(data);
};
