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
var util = require('../common/util');
require('../common/footer');
var productid = util.getSearch("productId");
var taxon = util.getSearch("taxon");
var name = util.getSearch("name");
$.get("http://139.199.192.48:9090/api/getproduct", { productid: productid }, function(data) {
    console.log(data)
    data.result[0].name = decodeURI(name);
    data.result[0].taxon = decodeURI(taxon);
    window.bjShop = data.result[0].bjShop;
    $(".screening").html(template("scr-tpl", data.result[0]))
    $(".message").html(template("mes-tpl", data.result[0]))
})
$.get("http://139.199.192.48:9090/api/getproductcom", { productid: productid }, function(data) {
    console.log(data)
    data.bjShop = window.bjShop;
    $(".eva").html(template("eva-tpl", data))

})
},{"../common/footer":1,"../common/util":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9jb21tb24vdXRpbC5qcyIsInNyYy9qcy9jb21wYXJpc29uL2RldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCgnLmJhY2tfdG9fdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCk7XHJcbn0pXHJcblxyXG4kKCcubG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSlcclxuJCgnLnJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgn5rKh5pyJ6L+Z5Liq5Yqf6IO9Jyk7XHJcbn0pIiwiXHJcbi8qKlxyXG4gKiDlvpfliLBpZFxyXG4gKiAxIOiOt+WPlmxvY2F0aW9uLnNlYXJjaOaVsOaNrlxyXG4gKiAyIOWOu+mZpO+8n+espuWPt1xyXG4gKiAzIOWIh+WJsuWtl+espuS4slxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U2VhcmNoKGtleSl7XHJcblx0dmFyIGRhdGFTdHIgPSBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSk7XHJcblx0dmFyIGRhdGFBcnIgPSBkYXRhU3RyLnNwbGl0KCcmJyk7XHJcblx0dmFyIHRlbXBBcnI7ZGF0YU9iaj17fTtcclxuXHRmb3IodmFyIGkgPSAwO2k8ZGF0YUFyci5sZW5ndGg7aSsrKXtcclxuXHRcdHRlbXBBcnIgPSBkYXRhQXJyW2ldLnNwbGl0KCc9Jyk7XHJcblx0XHRkYXRhT2JqW3RlbXBBcnJbMF1dPXRlbXBBcnJbMV07XHJcblx0fVxyXG5cdHJldHVybiBrZXkgPT0gbnVsbD8gZGF0YU9iajpkYXRhT2JqW2tleV07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmdldFNlYXJjaCA9IGdldFNlYXJjaDsiLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlsJyk7XHJcbnJlcXVpcmUoJy4uL2NvbW1vbi9mb290ZXInKTtcclxudmFyIHByb2R1Y3RpZCA9IHV0aWwuZ2V0U2VhcmNoKFwicHJvZHVjdElkXCIpO1xyXG52YXIgdGF4b24gPSB1dGlsLmdldFNlYXJjaChcInRheG9uXCIpO1xyXG52YXIgbmFtZSA9IHV0aWwuZ2V0U2VhcmNoKFwibmFtZVwiKTtcclxuJC5nZXQoXCJodHRwOi8vMTM5LjE5OS4xOTIuNDg6OTA5MC9hcGkvZ2V0cHJvZHVjdFwiLCB7IHByb2R1Y3RpZDogcHJvZHVjdGlkIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBkYXRhLnJlc3VsdFswXS5uYW1lID0gZGVjb2RlVVJJKG5hbWUpO1xyXG4gICAgZGF0YS5yZXN1bHRbMF0udGF4b24gPSBkZWNvZGVVUkkodGF4b24pO1xyXG4gICAgd2luZG93LmJqU2hvcCA9IGRhdGEucmVzdWx0WzBdLmJqU2hvcDtcclxuICAgICQoXCIuc2NyZWVuaW5nXCIpLmh0bWwodGVtcGxhdGUoXCJzY3ItdHBsXCIsIGRhdGEucmVzdWx0WzBdKSlcclxuICAgICQoXCIubWVzc2FnZVwiKS5odG1sKHRlbXBsYXRlKFwibWVzLXRwbFwiLCBkYXRhLnJlc3VsdFswXSkpXHJcbn0pXHJcbiQuZ2V0KFwiaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldHByb2R1Y3Rjb21cIiwgeyBwcm9kdWN0aWQ6IHByb2R1Y3RpZCB9LCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgZGF0YS5ialNob3AgPSB3aW5kb3cuYmpTaG9wO1xyXG4gICAgJChcIi5ldmFcIikuaHRtbCh0ZW1wbGF0ZShcImV2YS10cGxcIiwgZGF0YSkpXHJcblxyXG59KSJdfQ==
