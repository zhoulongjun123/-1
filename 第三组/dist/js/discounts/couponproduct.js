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
require('../common/footer')

function getSearch(key) {
    var searchStr = location.search.slice(1);
    var searchArr = searchStr.split('&');
    var searchObj = {},
        tempArr;

    for (var i = 0, len = searchArr.length; i < len; i++) {
        tempArr = searchArr[i].split('=');
        searchObj[tempArr[0]] = tempArr[1];
    }
    return key ? searchObj[key] : searchObj;
}
var couponId = getSearch('couponId');
$.get('http://139.199.192.48:9090/api/getcouponproduct', {
    couponid: couponId || 0
}, function(data) {
    $('.haitao-interface-content').html(template('discounts-coupt-tpl', data.result));
    $('.box-contain-ul').html(template('discounts-modalBox-tpl', data.result));
    $('.box-contain-ul').width((data.result.length + 2) * 200);
    $(document).on('click', '.media', function() {
        $('.modalBox').css('display', 'block');
        $('.box-contain-ul').css('margin-left', $(this).attr('data-cid') * 200 * -1);
    });

    $('.modalBox').on('click', function() {
        if ($(this).css('display') == 'block') {
            $(this).css('display', 'none');
        }
    })

});
// =========================模态框==================
$(".box-contain").css("margin-top", $('.modalBox').height() / 2 - $(".box-contain").height() / 2);
$(window).resize(function() {
    $(".box-contain").css('margin-top', $('.modalBox').height() / 2 - $(".box-contain").height() / 2);
});
},{"../common/footer":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9kaXNjb3VudHMvY291cG9ucHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCgnLmJhY2tfdG9fdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCk7XHJcbn0pXHJcblxyXG4kKCcubG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSlcclxuJCgnLnJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgn5rKh5pyJ6L+Z5Liq5Yqf6IO9Jyk7XHJcbn0pIiwicmVxdWlyZSgnLi4vY29tbW9uL2Zvb3RlcicpXHJcblxyXG5mdW5jdGlvbiBnZXRTZWFyY2goa2V5KSB7XHJcbiAgICB2YXIgc2VhcmNoU3RyID0gbG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpO1xyXG4gICAgdmFyIHNlYXJjaEFyciA9IHNlYXJjaFN0ci5zcGxpdCgnJicpO1xyXG4gICAgdmFyIHNlYXJjaE9iaiA9IHt9LFxyXG4gICAgICAgIHRlbXBBcnI7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlYXJjaEFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRlbXBBcnIgPSBzZWFyY2hBcnJbaV0uc3BsaXQoJz0nKTtcclxuICAgICAgICBzZWFyY2hPYmpbdGVtcEFyclswXV0gPSB0ZW1wQXJyWzFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleSA/IHNlYXJjaE9ialtrZXldIDogc2VhcmNoT2JqO1xyXG59XHJcbnZhciBjb3Vwb25JZCA9IGdldFNlYXJjaCgnY291cG9uSWQnKTtcclxuJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRjb3Vwb25wcm9kdWN0Jywge1xyXG4gICAgY291cG9uaWQ6IGNvdXBvbklkIHx8IDBcclxufSwgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgJCgnLmhhaXRhby1pbnRlcmZhY2UtY29udGVudCcpLmh0bWwodGVtcGxhdGUoJ2Rpc2NvdW50cy1jb3VwdC10cGwnLCBkYXRhLnJlc3VsdCkpO1xyXG4gICAgJCgnLmJveC1jb250YWluLXVsJykuaHRtbCh0ZW1wbGF0ZSgnZGlzY291bnRzLW1vZGFsQm94LXRwbCcsIGRhdGEucmVzdWx0KSk7XHJcbiAgICAkKCcuYm94LWNvbnRhaW4tdWwnKS53aWR0aCgoZGF0YS5yZXN1bHQubGVuZ3RoICsgMikgKiAyMDApO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZWRpYScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5tb2RhbEJveCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJy5ib3gtY29udGFpbi11bCcpLmNzcygnbWFyZ2luLWxlZnQnLCAkKHRoaXMpLmF0dHIoJ2RhdGEtY2lkJykgKiAyMDAgKiAtMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW9kYWxCb3gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5jc3MoJ2Rpc3BsYXknKSA9PSAnYmxvY2snKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufSk7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT3mqKHmgIHmoYY9PT09PT09PT09PT09PT09PT1cclxuJChcIi5ib3gtY29udGFpblwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsICQoJy5tb2RhbEJveCcpLmhlaWdodCgpIC8gMiAtICQoXCIuYm94LWNvbnRhaW5cIikuaGVpZ2h0KCkgLyAyKTtcclxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICQoXCIuYm94LWNvbnRhaW5cIikuY3NzKCdtYXJnaW4tdG9wJywgJCgnLm1vZGFsQm94JykuaGVpZ2h0KCkgLyAyIC0gJChcIi5ib3gtY29udGFpblwiKS5oZWlnaHQoKSAvIDIpO1xyXG59KTsiXX0=
