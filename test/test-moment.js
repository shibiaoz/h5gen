var moment = require('moment');
var format = 'YYYY-MM-DD HH:mm';
var str = moment(new Date()).format(format);
console.log(str);
