<?
/**
 * @desp : <%=desp%>
 * @author: <%=author%>
 * @since: <%=time%>
 */

/**
 * 结合legend 生成的数据结构
 * {
*    "version": "2",
*    "id": "28d4f3ca-7643-11e5-85d7-70e2840c1e14",
*    "createTime": "2015-10-19 17:24:12",
*    "updateTime": "2015-10-27 14:04:52",
*    "title": "我的legend",
*    "description": "",
*    "iconUrl": "http://hiphotos.baidu.com/doc/pic/item/ac345982b2b7d0a25e4d29d8cdef76094a369aea.jpg",
*    "useZepto": true,
*    "useSwiper": true,
*    "useParallax": false,
*    "useMap": false,
*    "helperJs": "",
*    "dataJsUrl": "http://tb1.bdstatic.com/legend/af0a62447950b823fd9b9158b5ffc19a_data.js",
*    "mainJsUrl": "http://tb1.bdstatic.com/legend/0dfaae7bc5cb7365d87dcbc18dd4be87_main.js",
*    "mainCssUrl": "http://tb1.bdstatic.com/legend/2e3868c4dc8dee08795587080e3c3ab3_main.css",
*    "dpPage": "lg-28d4f3ca7643",
*    "data": legend init中的数据，
* }
 */


PhizView::page('sglobal:page/Index.class.php')->assign($this->_arrVars)->fetch();

$pageConfig = <%=pageConfig%>;

/**
 * 在这里自定义的业务逻辑，把所有的数据处理放在control来处理
 * 不去手动改变lgend的模板数据
 */


/**
 * pageConfig,
 * 把pageconfig中数据在这里传到模板中
 *
 */
foreach ($pageConfig as $key => $value) {
    $this->assign($key, $value);
}
$this->display("<%=template%>");
