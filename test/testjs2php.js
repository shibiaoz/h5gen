var js2php = require('./js2php');
// https://github.com/KnightBubble/grunt-json2php
var data = {
    name:'zhangshibiao',
    hobbys: [
        {
            ball:'football',
        },
        {
            ball:'basketball'
        }
    ],
    loves:['first', 'second']
};

var data = {"attributes":[],"backStage":{},"frontStage":{},"pages":[{"attributes":{"background":"#FFF"},"components":[{"type":"image","surface":{"x":46,"y":19,"width":240,"height":188,"borderSize":1,"borderColor":"black","fill":"transparent"},"attributes":{"src":"http://hiphotos.baidu.com/doc/pic/item/c75c10385343fbf2f3458ebeb57eca8064388fc5.jpg","size":0,"filename":"","touchevent":"false","playAudio":"false","audio":"http://wenku.baidu.com/bookeditor/interface/thirdgetaudio?token=ab6451233c78be7912705baf651a333b","translateX":0,"translateY":0,"scale":1},"events":[]},{"type":"label","surface":{"x":80,"y":293,"width":266,"height":80,"borderSize":1,"borderColor":"black","fill":"transparent"},"attributes":{"html":"<p style=\"text-align: left;\"><span style=\"font-size: 36px; background-color: rgba(222, 55, 48, 0.568627);\">\u8d34\u5427\u7c89\u4e1d\u8282</span></p>","verticalAlign":"top","shadow":"false","shadowOffsetX":3,"shadowOffsetY":3,"shadowBlur":0,"shadowColor":"gray"},"events":[]}]}]}

var str = js2php(data);

console.log(str);
