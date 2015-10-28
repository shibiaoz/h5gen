/**
 * 简单的模板引擎
 */


/**
 * 简单的字符串替换引擎
 * seprator <%=xxx%>
 */
var strRep = function  (tpl, data) {
    return tpl && tpl.replace(/<%=([^%>]+)?%>/g, function (s0, s1) {
        var result = '';
        var curData = data;
        if (s1 && String(s1).indexOf('.') > -1) {
            var arrKeys = String(s1).split('.');
            while (key = arrKeys.shift()) {
                result = result ? result[key] : data[key];
            }
        }
        else {
            result = data[s1];
        }
        return result;
    });
}
exports.strRep = strRep;


