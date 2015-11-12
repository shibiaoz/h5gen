var yaml = require('yamljs');
var fs   = require('fs');
var path = require('path');
var shell = require('shelljs');
var pwd = shell.pwd();
var tplslist = require('./tplslist');
var yamlTempPath = path.join(__dirname, '../tpls.yaml');

// fe 模块下的 yaml配置文件
var yamlPath =  path.join(pwd, './tpls.yaml');

/**
 * 返回 yaml配置返回的对象
 * @return {[type]} [description]
 */
function getList () {
    var configStr = fs.readFileSync(yamlPath,'utf8').toString();
    var yamlCofig  = {};
    try {
        yamlCofig = yaml.parse(configStr);
    }
    catch(e) {
        console.log(e);
    }
    return yamlCofig;
}

/**
 * 如果前端模块里没有yaml文件，则新建一个
 * @param  {String} outputPath 目标路径 参数，null的时候为模块的路径下
 * @param  {Object} data       [yaml配置对应的对象]
 */
function genYaml(outputPath,data) {
    var outputPath = outputPath || yamlPath;
    var targetData = {};
    var pwd = shell.pwd();
    var writeStr = '';
    if (fs.existsSync(outputPath)) {
        // if exists ,push data to object from getList
        targetData = getList();
        targetData['tpls'].push(data);
    }
    else {
        shell.cp(yamlTempPath, yamlPath);
        targetData['desp'] = '自定义 模板列表';
        console.log(data);
        !data['tpls'] && (targetData['tpls'] = []) && (targetData['tpls'].push(data));
    }
    console.log(targetData);
    writeStr = yaml.stringify(targetData, 4);
    fs.writeFileSync(yamlPath,writeStr);
}
exports.getList = getList;
exports.genYaml = genYaml;
