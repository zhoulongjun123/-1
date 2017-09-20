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
require('./common/footer')

$.get('http://139.199.192.48:9090/api/getindexmenu', function(data) {
    console.log(data.result)
        // data.result[4].titlehref = 'haitaokousInterface.html';
    $('#menu_bar').html(template('menu-tpl', data.result));
    init();
})

function init() {
    var more = $('#menu_bar').children().eq(7)
    more.children().attr('href', "javascript:;");
    var flag = true;
    more.on('click', function() {
        if (flag) {
            $('#menu_bar').height(300)
            flag = false
        } else {
            $('#menu_bar').height(200);
            flag = true
        }
    })
}
// 折扣列表回显
$.get('http://139.199.192.48:9090/api/getmoneyctrl', function(data) {
    console.log(data.result)
    $("#count").html(template("list-tpl", data.result))

})
},{"./common/footer":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCgnLmJhY2tfdG9fdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCk7XHJcbn0pXHJcblxyXG4kKCcubG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSlcclxuJCgnLnJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgn5rKh5pyJ6L+Z5Liq5Yqf6IO9Jyk7XHJcbn0pIiwicmVxdWlyZSgnLi9jb21tb24vZm9vdGVyJylcclxuXHJcbiQuZ2V0KCdodHRwOi8vMTM5LjE5OS4xOTIuNDg6OTA5MC9hcGkvZ2V0aW5kZXhtZW51JywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHQpXHJcbiAgICAgICAgLy8gZGF0YS5yZXN1bHRbNF0udGl0bGVocmVmID0gJ2hhaXRhb2tvdXNJbnRlcmZhY2UuaHRtbCc7XHJcbiAgICAkKCcjbWVudV9iYXInKS5odG1sKHRlbXBsYXRlKCdtZW51LXRwbCcsIGRhdGEucmVzdWx0KSk7XHJcbiAgICBpbml0KCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG1vcmUgPSAkKCcjbWVudV9iYXInKS5jaGlsZHJlbigpLmVxKDcpXHJcbiAgICBtb3JlLmNoaWxkcmVuKCkuYXR0cignaHJlZicsIFwiamF2YXNjcmlwdDo7XCIpO1xyXG4gICAgdmFyIGZsYWcgPSB0cnVlO1xyXG4gICAgbW9yZS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICAkKCcjbWVudV9iYXInKS5oZWlnaHQoMzAwKVxyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjbWVudV9iYXInKS5oZWlnaHQoMjAwKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbi8vIOaKmOaJo+WIl+ihqOWbnuaYvlxyXG4kLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldG1vbmV5Y3RybCcsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0KVxyXG4gICAgJChcIiNjb3VudFwiKS5odG1sKHRlbXBsYXRlKFwibGlzdC10cGxcIiwgZGF0YS5yZXN1bHQpKVxyXG5cclxufSkiXX0=
