// -------- UserScript --------
// @name         百度文库 文档打印
// @fork from    http://github.com/HelloCodeMing/baidu-wenku
// @version      0.2
// @author       WangHuanMing, DoraemonYu
// @match        wenku.baidu.com/view/*
//------------------------------


// -------- Config --------

//模拟向下滚动时的间隔时间，请根据实际情况微调。
//数值过大时，整体完成时间会延长；数值过小时，会有部分章节没加载就被跳过。
var waitTime4Scroll = 800;	

//页面空白间距，不同文档的页面间距设置不同，但可以取个通用的值。
//数值(绝对值)过大，页面可能显示不全；数值(绝对值)过小，空白比较大。
var margin4ReaderPage ="-75px auto";

//---------------------------


//模拟点击"继续阅读"
$('.goBtn').click();
$('.read-all').click();


//不移除而进行隐藏。否则滚动时会频繁出现 Uncaught TypeError: Cannot read property 'top' of undefined
$(".aside").hide();  
//----------------


//移除不需要的页面内容#1
$('.zsj-topbar').remove();
$("#doc #hd").remove();
$(".crubms-wrap").remove();
$(".user-bar").remove();
$("#doc-header").remove();
$(".reader-tools-bar-wrap").remove();
$(".fix-searchbar-wrap").remove();
$("#bottom-doc-list-8").remove();
$(".ft").remove();
$("#ft").remove();
$("#docBubble").remove();
$('.hd').remove();
$('.wk-other-new-cntent').remove();
$('#html-reader-go-more').remove();
$('.new-wm').remove();
$('#bottom-download').remove();
$('#pay-page').remove();
$('.banner-wrap').remove();
$('#next_doc_box').remove();
$('.high-quality-doc').remove();
$('.new-ico-wkmember-free-doc').remove();
$('.doc-tag-pay-normal').remove();
$('.doc-tag-professional').remove();
$('.doc-tag-pay-discount').remove();
$('.doc-tag-ticket').remove();
$('.reader-back2top-wrap').remove();
$("body").attr("margin", "auto");
//$(".bd").attr("style", "height:1262.879px"); //暂时注释掉
//------------------------------


//移除不需要的页面内容#2:适应新View的页面
$('.header-wrapper').remove();
$('.relative-recommend-wrapper').remove();
$('.propagation-wrapper').remove();
$('.reader-topbar').remove();
$('.fc-parallax-scrolling').hide();
$('.no-full-screen').hide();
$('.try-end-fold-page').remove();
$('.hx-warp').remove();
$('.left-sidebar-wrapper').hide();
$('#page-footer').hide();
//------------------------------


//继续删除页面内容
$('#doc_bottom_wrap').remove();
$('.mod.lastcell-dialog').remove();
$('.doc-tag-wrap.super-vip.fixed').remove();
$('.title-con-fc').remove();


//去除边框
$('.reader-page').css({
    border: 0
});


//向下滚动时，页面会remove其他已显示的内容。重写它
jQuery.fn.extend({
    remove: function () {
        return false;
    }
});


//稍微去除"纸张间距"
$('.reader-page').css("margin", margin4ReaderPage);


//恢复空白背景色
$('html,body').css("background", "#fff");



//模拟向下滚动，加载剩余的文档内容
var _h = document.body.scrollHeight,
    _tmp = 0;
var _t = window.setInterval(function () {
    $(window).scrollTop(_tmp);
    _tmp = _tmp + 700;
    _h = document.body.scrollHeight;
    if (_tmp > _h) {
        window.clearInterval(_t);		
		
		//打印的时候，会被这个CSS影响 @media print{body{display:none}}，因此覆盖掉
		$('body').css("display","block");
		
		//弹出打印窗口
        window.setTimeout(function () {
            window.print();
        }, 2000);
    }
}, waitTime4Scroll);
