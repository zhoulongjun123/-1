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
require('../common/footer');
var util = require('../common/util');
var categoryid = util.getSearch("categoryId")
$.get('http://139.199.192.48:9090/api/getcategorybyid', { categoryid: categoryid }, function(data) {
        console.log(data.result[0])
        window.taxon = data.result[0].category;
        $('#headline').html(template("title-tpl", data.result[0]))
    })
    //商品列表
    // $.get("http://139.199.192.48:9090/api/getproductlist", { categoryid: categoryid }, function(data) {
    //     console.log(data)
    //     $('#ct_list').html(template("ct_list_tpl", data));
    // })
    // $ajax
    // async:false;
function render(categoryid, pageid) {
    $.get("http://139.199.192.48:9090/api/getproductlist", { categoryid: categoryid, pageid: pageid || 1 }, function(data) {
        data.taxon = window.taxon;
        console.log(data)
        window.totalPage = Math.ceil(data.totalCount / data.pagesize)
        window.pageArr = [];
        for (var i = 0; i < window.totalPage; i++) {
            window.pageArr[i] = i;
        }
        data.pageArr = window.pageArr;
        data.totalPage = window.totalPage
        var pageId = pageid || 1;
        $('#ct_list').html(template("ct_list_tpl", data));
        $("#selPage option").eq((pageId - 1)).attr("selected", true).siblings().attr("selected", false)
    })
}
render(categoryid)
$(document).on("change", "#selPage", function() {
    var pageid = $("#selPage option:selected").val();
    console.log(pageid)
    render(categoryid, pageid)
})
$(document).on("click", ".previous", function() {
    var pageid = $("#selPage option:selected").val();
    pageid--;
    if (pageid < 0) { pageid = 1 }
    render(categoryid, pageid)
})
$(document).on("click", ".next", function() {
    var pageid = $("#selPage option:selected").val();
    pageid++;
    if (pageid > window.totalPage) { pageid = window.totalPage }
    render(categoryid, pageid)
})
},{"../common/footer":1,"../common/util":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9jb21tb24vdXRpbC5qcyIsInNyYy9qcy9jb21wYXJpc29uL2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCgnLmJhY2tfdG9fdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCk7XHJcbn0pXHJcblxyXG4kKCcubG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSlcclxuJCgnLnJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgn5rKh5pyJ6L+Z5Liq5Yqf6IO9Jyk7XHJcbn0pIiwiXHJcbi8qKlxyXG4gKiDlvpfliLBpZFxyXG4gKiAxIOiOt+WPlmxvY2F0aW9uLnNlYXJjaOaVsOaNrlxyXG4gKiAyIOWOu+mZpO+8n+espuWPt1xyXG4gKiAzIOWIh+WJsuWtl+espuS4slxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U2VhcmNoKGtleSl7XHJcblx0dmFyIGRhdGFTdHIgPSBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSk7XHJcblx0dmFyIGRhdGFBcnIgPSBkYXRhU3RyLnNwbGl0KCcmJyk7XHJcblx0dmFyIHRlbXBBcnI7ZGF0YU9iaj17fTtcclxuXHRmb3IodmFyIGkgPSAwO2k8ZGF0YUFyci5sZW5ndGg7aSsrKXtcclxuXHRcdHRlbXBBcnIgPSBkYXRhQXJyW2ldLnNwbGl0KCc9Jyk7XHJcblx0XHRkYXRhT2JqW3RlbXBBcnJbMF1dPXRlbXBBcnJbMV07XHJcblx0fVxyXG5cdHJldHVybiBrZXkgPT0gbnVsbD8gZGF0YU9iajpkYXRhT2JqW2tleV07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmdldFNlYXJjaCA9IGdldFNlYXJjaDsiLCJyZXF1aXJlKCcuLi9jb21tb24vZm9vdGVyJyk7XHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWwnKTtcclxudmFyIGNhdGVnb3J5aWQgPSB1dGlsLmdldFNlYXJjaChcImNhdGVnb3J5SWRcIilcclxuJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRjYXRlZ29yeWJ5aWQnLCB7IGNhdGVnb3J5aWQ6IGNhdGVnb3J5aWQgfSwgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0WzBdKVxyXG4gICAgICAgIHdpbmRvdy50YXhvbiA9IGRhdGEucmVzdWx0WzBdLmNhdGVnb3J5O1xyXG4gICAgICAgICQoJyNoZWFkbGluZScpLmh0bWwodGVtcGxhdGUoXCJ0aXRsZS10cGxcIiwgZGF0YS5yZXN1bHRbMF0pKVxyXG4gICAgfSlcclxuICAgIC8v5ZWG5ZOB5YiX6KGoXHJcbiAgICAvLyAkLmdldChcImh0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRwcm9kdWN0bGlzdFwiLCB7IGNhdGVnb3J5aWQ6IGNhdGVnb3J5aWQgfSwgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvLyAgICAgJCgnI2N0X2xpc3QnKS5odG1sKHRlbXBsYXRlKFwiY3RfbGlzdF90cGxcIiwgZGF0YSkpO1xyXG4gICAgLy8gfSlcclxuICAgIC8vICRhamF4XHJcbiAgICAvLyBhc3luYzpmYWxzZTtcclxuZnVuY3Rpb24gcmVuZGVyKGNhdGVnb3J5aWQsIHBhZ2VpZCkge1xyXG4gICAgJC5nZXQoXCJodHRwOi8vMTM5LjE5OS4xOTIuNDg6OTA5MC9hcGkvZ2V0cHJvZHVjdGxpc3RcIiwgeyBjYXRlZ29yeWlkOiBjYXRlZ29yeWlkLCBwYWdlaWQ6IHBhZ2VpZCB8fCAxIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBkYXRhLnRheG9uID0gd2luZG93LnRheG9uO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgd2luZG93LnRvdGFsUGFnZSA9IE1hdGguY2VpbChkYXRhLnRvdGFsQ291bnQgLyBkYXRhLnBhZ2VzaXplKVxyXG4gICAgICAgIHdpbmRvdy5wYWdlQXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aW5kb3cudG90YWxQYWdlOyBpKyspIHtcclxuICAgICAgICAgICAgd2luZG93LnBhZ2VBcnJbaV0gPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLnBhZ2VBcnIgPSB3aW5kb3cucGFnZUFycjtcclxuICAgICAgICBkYXRhLnRvdGFsUGFnZSA9IHdpbmRvdy50b3RhbFBhZ2VcclxuICAgICAgICB2YXIgcGFnZUlkID0gcGFnZWlkIHx8IDE7XHJcbiAgICAgICAgJCgnI2N0X2xpc3QnKS5odG1sKHRlbXBsYXRlKFwiY3RfbGlzdF90cGxcIiwgZGF0YSkpO1xyXG4gICAgICAgICQoXCIjc2VsUGFnZSBvcHRpb25cIikuZXEoKHBhZ2VJZCAtIDEpKS5hdHRyKFwic2VsZWN0ZWRcIiwgdHJ1ZSkuc2libGluZ3MoKS5hdHRyKFwic2VsZWN0ZWRcIiwgZmFsc2UpXHJcbiAgICB9KVxyXG59XHJcbnJlbmRlcihjYXRlZ29yeWlkKVxyXG4kKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcIiNzZWxQYWdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHBhZ2VpZCA9ICQoXCIjc2VsUGFnZSBvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlaWQpXHJcbiAgICByZW5kZXIoY2F0ZWdvcnlpZCwgcGFnZWlkKVxyXG59KVxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnByZXZpb3VzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHBhZ2VpZCA9ICQoXCIjc2VsUGFnZSBvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICBwYWdlaWQtLTtcclxuICAgIGlmIChwYWdlaWQgPCAwKSB7IHBhZ2VpZCA9IDEgfVxyXG4gICAgcmVuZGVyKGNhdGVnb3J5aWQsIHBhZ2VpZClcclxufSlcclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5uZXh0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHBhZ2VpZCA9ICQoXCIjc2VsUGFnZSBvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICBwYWdlaWQrKztcclxuICAgIGlmIChwYWdlaWQgPiB3aW5kb3cudG90YWxQYWdlKSB7IHBhZ2VpZCA9IHdpbmRvdy50b3RhbFBhZ2UgfVxyXG4gICAgcmVuZGVyKGNhdGVnb3J5aWQsIHBhZ2VpZClcclxufSkiXX0=
