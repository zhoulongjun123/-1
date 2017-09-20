(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('.back_to_top').on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 500);
})

$('.login').on('click', function() {
    alert('没有这个功能');
})
$('.register').on('click', function() {
    alert('没有这个功能');
})
},{}],2:[function(require,module,exports){

/**
 * 得到id
 * 1 获取location.search数据
 * 2 去除？符号
 * 3 切割字符串
 */
function getSearch(key){
	var dataStr = location.search.slice(1);
	var dataArr = dataStr.split('&');
	var tempArr;dataObj={};
	for(var i = 0;i<dataArr.length;i++){
		tempArr = dataArr[i].split('=');
		dataObj[tempArr[0]]=tempArr[1];
	}
	return key == null? dataObj:dataObj[key];
}

module.exports.getSearch = getSearch;
},{}],3:[function(require,module,exports){
var util = require('../common/util.js')
require('../common/footer.js');



var productid = util.getSearch('productid');
$.get('http://139.199.192.48:9090/api/getmoneyctrlproduct', { productid: productid }, function(data) {
    var html = template('commondity_tpl', data.result[0]);
    $('.commodity_init').html(html);

    var path = template('discount_path', data.result[0]);
    $('.path_view').append(path);
    $('.con').addClass('clearfix');


    /* 评论限制最小高度 */
    var lis = $('.list li');
    for (var i = 0; i < lis.length; i++) {;
        if (lis.height() < 100) {
            console.log(lis);
            lis.height(100);
        }
    }
})
},{"../common/footer.js":1,"../common/util.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9jb21tb24vdXRpbC5qcyIsInNyYy9qcy9zYXZlL3NhdmVfY29tbW9kaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCcuYmFja190b190b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgNTAwKTtcclxufSlcclxuXHJcbiQoJy5sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgYWxlcnQoJ+ayoeaciei/meS4quWKn+iDvScpO1xyXG59KVxyXG4kKCcucmVnaXN0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSkiLCJcclxuLyoqXHJcbiAqIOW+l+WIsGlkXHJcbiAqIDEg6I635Y+WbG9jYXRpb24uc2VhcmNo5pWw5o2uXHJcbiAqIDIg5Y676Zmk77yf56ym5Y+3XHJcbiAqIDMg5YiH5Ymy5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTZWFyY2goa2V5KXtcclxuXHR2YXIgZGF0YVN0ciA9IGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKTtcclxuXHR2YXIgZGF0YUFyciA9IGRhdGFTdHIuc3BsaXQoJyYnKTtcclxuXHR2YXIgdGVtcEFycjtkYXRhT2JqPXt9O1xyXG5cdGZvcih2YXIgaSA9IDA7aTxkYXRhQXJyLmxlbmd0aDtpKyspe1xyXG5cdFx0dGVtcEFyciA9IGRhdGFBcnJbaV0uc3BsaXQoJz0nKTtcclxuXHRcdGRhdGFPYmpbdGVtcEFyclswXV09dGVtcEFyclsxXTtcclxuXHR9XHJcblx0cmV0dXJuIGtleSA9PSBudWxsPyBkYXRhT2JqOmRhdGFPYmpba2V5XTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuZ2V0U2VhcmNoID0gZ2V0U2VhcmNoOyIsInZhciB1dGlsID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWwuanMnKVxyXG5yZXF1aXJlKCcuLi9jb21tb24vZm9vdGVyLmpzJyk7XHJcblxyXG5cclxuXHJcbnZhciBwcm9kdWN0aWQgPSB1dGlsLmdldFNlYXJjaCgncHJvZHVjdGlkJyk7XHJcbiQuZ2V0KCdodHRwOi8vMTM5LjE5OS4xOTIuNDg6OTA5MC9hcGkvZ2V0bW9uZXljdHJscHJvZHVjdCcsIHsgcHJvZHVjdGlkOiBwcm9kdWN0aWQgfSwgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSgnY29tbW9uZGl0eV90cGwnLCBkYXRhLnJlc3VsdFswXSk7XHJcbiAgICAkKCcuY29tbW9kaXR5X2luaXQnKS5odG1sKGh0bWwpO1xyXG5cclxuICAgIHZhciBwYXRoID0gdGVtcGxhdGUoJ2Rpc2NvdW50X3BhdGgnLCBkYXRhLnJlc3VsdFswXSk7XHJcbiAgICAkKCcucGF0aF92aWV3JykuYXBwZW5kKHBhdGgpO1xyXG4gICAgJCgnLmNvbicpLmFkZENsYXNzKCdjbGVhcmZpeCcpO1xyXG5cclxuXHJcbiAgICAvKiDor4TorrrpmZDliLbmnIDlsI/pq5jluqYgKi9cclxuICAgIHZhciBsaXMgPSAkKCcubGlzdCBsaScpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHs7XHJcbiAgICAgICAgaWYgKGxpcy5oZWlnaHQoKSA8IDEwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXMpO1xyXG4gICAgICAgICAgICBsaXMuaGVpZ2h0KDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSJdfQ==
