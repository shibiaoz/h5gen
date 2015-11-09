<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <?php
    echo('<meta name="title" content="' . $title . '">');
    echo('<title>' . $title . '</title>');
    if ($description) {
      echo('<meta name="description" content="' . $description . '">');
    }
    if ($iconUrl) {
      echo('<meta name="share-icon" content="' . $iconUrl . '">');
      echo('<link rel="shortcut icon" href="' . $iconUrl . '">');
    }
    ?>
    <meta name="full-screen" content="true">
    <meta name="screen-orientation" content="portrait">
    <meta name="x5-fullscreen" content="true">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache,must-revalidate">
    <meta http-equiv="expires" content="-1">
    <script>
      !function(){function e(e){e.target&&/^(input|textarea|a)$/i.test(e.target.tagName)||e.preventDefault()}var t=400,n=screen.width/t,i='<meta name="viewport" content="width='+t+", initial-scale="+n+", maximum-scale="+n+", minimum-scale="+n+', user-scalable=no, target-densitydpi=device-dpi, minimal-ui" />';document.write(i),document.addEventListener("touchstart",e,!1),document.addEventListener("touchmove",e,!1),window.addEventListener("load",function(){var e=document.body.clientHeight,t=500;if(t>e){var n=document.querySelector(".lg-container");n&&(n.style.webkitTransformOrigin="50% 0",n.style.webkitTransform="translateZ(0) scale("+e/t+")")}},!1)}();
    </script>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <style>
    .lg-backface,.lg-page{background-size:cover!important;-webkit-background-size:cover!important}body,html{width:400px;height:100%;max-height:712px;margin:0 auto;padding:0;background-color:#FFF;overflow:hidden;font-family:STHeiTi,"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-user-select:none;user-select:none}html{background-color:#DDD}article,div,h1,h2,h3,h4,h5,p,section{margin:0;padding:0}.lg-icon{position:absolute;width:0;height:0;z-index:-1}.lg-container,.lg-page-container{width:100%;height:100%;min-height:500px;position:relative;overflow:visible}.lg-back-stage,.lg-front-stage{overflow:visible;position:absolute;left:0;right:0;bottom:0;top:0;pointer-events:none}.lg-back-stage .lg-surface,.lg-front-stage .lg-surface{pointer-events:all}.lg-back-stage{z-index:0}.lg-front-stage{z-index:2}.lg-page{width:100%;height:100%;position:relative;-webkit-backface-visibility:hidden;overflow:hidden}.lg-page .lg-trailer{-webkit-animation-play-state:paused;animation-play-state:paused}.lg-backface{position:absolute;left:0;bottom:0;right:0;top:0;pointer-events:none}.lg-surface{overflow:hidden;-webkit-box-sizing:content-box;box-sizing:content-box}.lg-surface,.lg-trailer{position:absolute;z-index:1}#loading #shushuo,#loading p{position:relative;z-index:101}.islider-active .lg-trailer,.lg-back-stage .lg-trailer,.lg-front-stage .lg-trailer{-webkit-animation-play-state:running;animation-play-state:running}.lg-container{opacity:0}.lg-container.ready{opacity:1}@-webkit-keyframes svg-stroke-top{0%,10%{stroke-dashoffset:-600;fill-opacity:0}30%,70%{stroke-dashoffset:0;fill-opacity:0}45%,57%{fill-opacity:1}100%,90%{stroke-dashoffset:600;fill-opacity:0}}@keyframes svg-stroke-top{0%,10%{stroke-dashoffset:-600;fill-opacity:0}30%,70%{stroke-dashoffset:0;fill-opacity:0}45%,57%{fill-opacity:1}100%,90%{stroke-dashoffset:600;fill-opacity:0}}@-webkit-keyframes svg-stroke-bottom{0%,10%{stroke-dashoffset:-800;fill-opacity:0}30%,70%{fill-opacity:0;stroke-dashoffset:0}45%,57%{fill-opacity:1}100%,90%{stroke-dashoffset:800;fill-opacity:0}}@keyframes svg-stroke-bottom{0%,10%{stroke-dashoffset:-800;fill-opacity:0}30%,70%{fill-opacity:0;stroke-dashoffset:0}45%,57%{fill-opacity:1}100%,90%{stroke-dashoffset:800;fill-opacity:0}}#shushuo{display:inline-block;vertical-align:middle}#shushuo #top{fill:#5CA3E2;fill-opacity:0;stroke:#5CA3E2;stroke-width:3px;stroke-dasharray:600 600;stroke-dashoffset:-600;-webkit-animation:svg-stroke-top 8s ease-out infinite;animation:svg-stroke-top 8s ease-out infinite}#shushuo #bottom{fill:gray;fill-opacity:0;stroke:gray;stroke-width:3px;stroke-dasharray:800 800;stroke-dashoffset:-800;-webkit-animation:svg-stroke-bottom 8s ease-out infinite;animation:svg-stroke-bottom 8s ease-out infinite}#loading{position:absolute;width:300px;height:200px;left:50%;top:50%;margin-left:-150px;margin-top:-100px}#loading #shushuo{display:block;margin:0 auto}#loading p{text-align:center;margin:0}#loading:before{content:' ';display:block;position:fixed;left:0;top:0;right:0;bottom:0;z-index:100;background-color:#fff}.toast-message{word-wrap:break-word}.toast-message a,.toast-message label{color:#fff}.toast-top-center{top:0;right:0;width:100%}#toast-container{position:fixed;z-index:999999}#toast-container *{-webkit-box-sizing:border-box;box-sizing:border-box}#toast-container>div{position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:400px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;-webkit-box-shadow:0 0 12px #999;box-shadow:0 0 12px #999;color:#fff}#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important}#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important}#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important}#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important}#toast-container.toast-top-center>div{width:400px;margin:auto}@-webkit-keyframes toast-live{0%,100%{opacity:0}10%,90%{opacity:.8}}@keyframes toast-live{0%,100%{opacity:0}10%,90%{opacity:.8}}.toast{background-color:#030303;-webkit-animation:toast-live 3s ease-in infinite;animation:toast-live 3s ease-in infinite}.toast-success{background-color:#51a351}.toast-error{background-color:#bd362f}.toast-info{background-color:#2f96b4}.toast-warning{background-color:#f89406}#loading-cover{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.3);z-index:99;display:none}#loading-cover .text{position:absolute;top:50%;left:50%;color:#fff;width:200px;height:50px;margin-top:-25px;margin-left:-100px;text-align:center;line-height:20px}#loading-cover .text img{height:100%}
    </style>
    <script>
        void function(g,f,j,c,h,d,b){g.alogObjectName=h,g[h]=g[h]||function(){(g[h].q=g[h].q||[]).push(arguments)},g[h].l=g[h].l||+new Date,d=f.createElement(j),d.async=!0,d.src=c,b=f.getElementsByTagName(j)[0],b.parentNode.insertBefore(d,b)}(window,document,"script","http://img.baidu.com/hunter/alog/alog.mobile.min.js","alog");
    </script>
  </head>
  <body>
    <?php echo('<img src="' . $iconUrl . '" class="lg-icon">')?>
    <div id="loading">
      <svg id="shushuo" width="100" height="100" viewBox="0 0 200 200"><path id="bottom" d="M48 70.5L24 57.16v84.954l76 45.202 27-15.904v-57.72l27-15.47v57.285l22-13.393V57.16l-76 42.372v59.395l-52-30.972z"/><path id="top" d="M171.982 53.963L128.63 31.658 75.52 59.354l-14.78-6.63 54.062-28.18-15.045-7.74-72.225 37.16 46.442 25.6 51.356-28.248 12.026 6.63L85.505 85.92l14.253 7.857z"/></svg>
      <p class="progress"></p>
    </div>
    <div id="loading-cover">
        <p class="text">
            <!-- <span class="pg"></span> 资源加载中... -->
            <img>
        </p>
    </div>
<?php
if ($useSwiper) {
  echo('<link type="text/css" rel="stylesheet" href="http://tb1.bdstatic.com/legend/fdc14b6bd35784273b116f151f39fcac_islider.2.x.css">');
}
echo('<link type="text/css" rel="stylesheet" href="' . $mainCssUrl . '">');
?>
    <div class="lg-container">
      <div class="lg-back-stage">
        <div class="lg-backface"></div>
      </div>
      <div class="lg-page-container"></div>
      <div class="lg-front-stage">
        <div class="lg-backface"></div>
      </div>
    </div>
<?php
if (isset($useZepto)) {
  echo('<script src="http://img.baidu.com/hunter/l/zepto.1.1.6.min.js"></script>');
}
if (isset($useParallax)) {
  echo('<script src="http://st0.im.baidu.com/legend/parallax2.1.3.min.js"></script>');
}
if (isset($useSwiper)) {
  echo('<script src="http://tb1.bdstatic.com/legend/b95320f1d7ef32f1df73c7488164021a_islider.2.x.js"></script>');
}
if (isset($useMap)) {
  echo('<script src="http://api.map.baidu.com/api?type=quick&amp;ak=bUPrignlRAdskUaqex5FEfem&amp;v=1.0"></script>');
}
echo('<script src="' . $mainJsUrl . '"></script>');
// echo('<script src="' . $dataJsUrl . '"></script>');
if (isset($helperJsUrl)) {
  echo('<script src="' . $helperJsUrl . '"></script>');
}
?>
  </body>
  <script src="http://hm.baidu.com/h.js?7ba039077e4ada3e97c58d3dc522a7a6" async="async"></script>
  <script>
  !function(){if("undefined"!=typeof alog){var e=localStorage,t=e.legendUser;(!t||t.length>30)&&(t=e.legendUser=Number(new Date).toString(36)+Math.random().toString(36).slice(3,7)),alog("tr.create",{postUrl:"http://socketapi.duapp.com/pv/<?=_j($id)?>/"+t}),alog("tr.send","pageview")}}();
  </script>
<?php
  $data = $data;
?>
<script src="http://static2.searchbox.baidu.com/static/searchbox/openjs/aio.js?t=20150907"></script>
<script>
var data = <?= json($data);?>
legend.init(data);
</script>
</html>
