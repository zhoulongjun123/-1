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
require('../common/footer.js')


// $.get('http://139.199.192.48:9090/api/getinlanddiscount', function(data) {

//     $('.discount_list_p').html(template('discount_list_tpl', data.result));

// })


/* 懒加载 */

var flag = true;
var pageIndex = 1;
loadData(pageIndex);
var page;

function loadData(pageIndex) {
    flag = false;
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getinlanddiscount',
        type: 'get',
        beforeSend: function() {
            $('.loading').show()
        },
        success: function(data) {
            var result = data.result;
            var list = result.length;
            var arr = [];
            var col = 4;
            var start = col * pageIndex - col; //初始位置
            var end = col * pageIndex //结束位置
            if (end > 20) {

                return;
            }
            for (var i = start; i < end; i++) {
                arr.push(result[i]);
                var html = template('discount_list_tpl', arr);
            }
            console.log(arr);
            page = list / col;
            $('.discount_list_p').append(html);
        },
        complete: function() {
            flag = true;
            $('.loading').hide();
        },
    })
}



$(document).on('scroll', function() {
    var pageHeight = $('body').height(); //盒子高度
    var windowTop = $(document).scrollTop(); //滚动出去的距离
    var height = pageHeight - windowTop
        // console.log(boxHeight, windowTop)
    if (height <= $(window).height()) {
        if (flag) {
            pageIndex++;
            if (pageIndex > page) {
                $('.nothing').css({ 'display': "block" })
                return;
            }
            loadData(pageIndex)
        }

    }

})
},{"../common/footer.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9kaXNjb3VudC9kaXNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCgnLmJhY2tfdG9fdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCk7XHJcbn0pXHJcblxyXG4kKCcubG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSlcclxuJCgnLnJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgn5rKh5pyJ6L+Z5Liq5Yqf6IO9Jyk7XHJcbn0pIiwicmVxdWlyZSgnLi4vY29tbW9uL2Zvb3Rlci5qcycpXHJcblxyXG5cclxuLy8gJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRpbmxhbmRkaXNjb3VudCcsIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHJcbi8vICAgICAkKCcuZGlzY291bnRfbGlzdF9wJykuaHRtbCh0ZW1wbGF0ZSgnZGlzY291bnRfbGlzdF90cGwnLCBkYXRhLnJlc3VsdCkpO1xyXG5cclxuLy8gfSlcclxuXHJcblxyXG4vKiDmh5LliqDovb0gKi9cclxuXHJcbnZhciBmbGFnID0gdHJ1ZTtcclxudmFyIHBhZ2VJbmRleCA9IDE7XHJcbmxvYWREYXRhKHBhZ2VJbmRleCk7XHJcbnZhciBwYWdlO1xyXG5cclxuZnVuY3Rpb24gbG9hZERhdGEocGFnZUluZGV4KSB7XHJcbiAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRpbmxhbmRkaXNjb3VudCcsXHJcbiAgICAgICAgdHlwZTogJ2dldCcsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5sb2FkaW5nJykuc2hvdygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBkYXRhLnJlc3VsdDtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSByZXN1bHQubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgIHZhciBjb2wgPSA0O1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBjb2wgKiBwYWdlSW5kZXggLSBjb2w7IC8v5Yid5aeL5L2N572uXHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBjb2wgKiBwYWdlSW5kZXggLy/nu5PmnZ/kvY3nva5cclxuICAgICAgICAgICAgaWYgKGVuZCA+IDIwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChyZXN1bHRbaV0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSgnZGlzY291bnRfbGlzdF90cGwnLCBhcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycik7XHJcbiAgICAgICAgICAgIHBhZ2UgPSBsaXN0IC8gY29sO1xyXG4gICAgICAgICAgICAkKCcuZGlzY291bnRfbGlzdF9wJykuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgJCgnLmxvYWRpbmcnKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHBhZ2VIZWlnaHQgPSAkKCdib2R5JykuaGVpZ2h0KCk7IC8v55uS5a2Q6auY5bqmXHJcbiAgICB2YXIgd2luZG93VG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7IC8v5rua5Yqo5Ye65Y6755qE6Led56a7XHJcbiAgICB2YXIgaGVpZ2h0ID0gcGFnZUhlaWdodCAtIHdpbmRvd1RvcFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJveEhlaWdodCwgd2luZG93VG9wKVxyXG4gICAgaWYgKGhlaWdodCA8PSAkKHdpbmRvdykuaGVpZ2h0KCkpIHtcclxuICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICBwYWdlSW5kZXgrKztcclxuICAgICAgICAgICAgaWYgKHBhZ2VJbmRleCA+IHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICQoJy5ub3RoaW5nJykuY3NzKHsgJ2Rpc3BsYXknOiBcImJsb2NrXCIgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2FkRGF0YShwYWdlSW5kZXgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0pIl19
