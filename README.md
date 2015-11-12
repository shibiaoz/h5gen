# h5gen

>  安装

```
npm install -g h5gen (--registry=https://registry.npm.taobao.org)

```

> 使用

1. 首先需要建个control 模板`h5gen tem`
   你可以修改control 这个模板，添加一些全局的逻辑,这个模板会存到你logic-tpls文件夹
2. 生成你的页面`h5gen`
    选择你 的control  模板
    输入页面的id,这个id 来源与我么的[系统](http://cp01-hj-lh-sandbox-tech00.epc.baidu.com:8081/page)
    根据需要回车键就行
3. 二次开发
   经历步骤2，基本control 和 template 就生成了，
   control 这主要涉及对内容的获取
   templete 已经挖好坑，在对应php 和 js 坑中开发你的业务逻辑即可
4. 走正常的上线流程
5. 如果后续有修改样式的化，直接执行步骤2即可






```
h5gen script
npm install --save shelljs --registry=https://registry.npm.taobao.org



npm install
npm link
npm uninstall h5gen;
```
