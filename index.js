// ==UserScript==
// @name         百度文库 文档打印
// @namespace    http://github.com/HelloCodeMing/baidu-wenku
// @require      https://raw.githubusercontent.com/HelloCodeMing/baidu-wenku/master/index.js
// @version      0.1
// @description  enter something useful
// @author       wanghuanming
// @match        wenku.baidu.com/view*
// @grant        none
// ==/UserScript==

$(".aside").remove();
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
$("body").attr("margin", "auto");
$(".bd").attr("style", "height:1262.879px");
