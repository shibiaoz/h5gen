var tplslist = require('../src/tplslist');
var config = tplslist.getList();
config.tpls.push(config.tpls[1]);
//console.log(config);
tplslist.genYaml('sd', config);
