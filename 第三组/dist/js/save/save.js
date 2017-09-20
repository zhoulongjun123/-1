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
require('../common/footer');



function render(tplId, selId, data) {
    var html = template(tplId, data.result)
    $(selId).html(html);
}

function render2(pageid1) {
    $.get('http://139.199.192.48:9090/api/getmoneyctrl', { pageid: pageid1 }, function(data) {
        render('save_list_form1', '#save_list_form', data)
    });
}

// var pageid1 = $('#save_select').val() || null;
// var pageObj = pageid1 != null ? { pageid: pageid1 } : null;


/* 首次请求数据 */
$.get('http://139.199.192.48:9090/api/getmoneyctrl', function(data) {

    //渲染模板
    render('save_list_form1', '#save_list_form', data)

    //获取option里的值
    var pageNum = Math.ceil(data.totalCount / data.pagesize);
    var pageArr = [];
    for (var i = 1; i < pageNum + 1; i++) {
        var page = data.pagesize / 10 * i;
        var page1 = '  ' + page + '/' + pageNum;
        // console.log(page)
        pageArr.push(page1);
    }
    console.log(pageArr)

    $('#save_select').html(template('save_list_page', { item: pageArr }));

    // window.pageid = $('#save_select').val();


});


/* 选择翻页功能 */

$(document).on('change', '#save_select', function() {
    var _this = $(this);
    pageid = $(this).val();
    // location.search = '?pageid=' + pageid;
    //改变option的选中
    // console.log(pageid)

    render2(pageid);
})

/* 上一页功能 */
$('.list_handle_left').on('click', function() {
    var pageid = $('#save_select').val();
    pageid--;
    if (pageid < 1) {
        alert("已经是第一页了")
        return;
    }
    // $('#save_select option').eq(pageid).attr('selected', true)
    $("#save_select").val(pageid);
    render2(pageid);

})

/* 下一页功能 */
$('.list_handle_right').on('click', function() {
    var pageid = $('#save_select').val();
    pageid++;
    if (pageid > 15) {
        alert("已经是最后一页了")
        return;
    }
    // $('#save_select option').eq(pageid).attr('selected', true)
    $("#save_select").val(pageid);
    render2(pageid);
})






























// $(document).on('change', '#save_select', function() {
//     var _this = $(this);
//     var pageid = $(this).val();
//     // location.search = '?pageid=' + pageid;
//     render2(pageid);

//     //改变option的选中
//     $('.list_handle_left').on('click', function() {
//         var pageidLast = _this.val();
//         pageidLast--;
//         console.log(pageidLast)
//         $('#save_select option').eq(pageidLast).attr('selected', true)
//         render2(pageidLast);

//     })

// })
},{"../common/footer":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9zYXZlL3NhdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCgnLmJhY2tfdG9fdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCk7XHJcbn0pXHJcblxyXG4kKCcubG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSlcclxuJCgnLnJlZ2lzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgn5rKh5pyJ6L+Z5Liq5Yqf6IO9Jyk7XHJcbn0pIiwicmVxdWlyZSgnLi4vY29tbW9uL2Zvb3RlcicpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXIodHBsSWQsIHNlbElkLCBkYXRhKSB7XHJcbiAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKHRwbElkLCBkYXRhLnJlc3VsdClcclxuICAgICQoc2VsSWQpLmh0bWwoaHRtbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcjIocGFnZWlkMSkge1xyXG4gICAgJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRtb25leWN0cmwnLCB7IHBhZ2VpZDogcGFnZWlkMSB9LCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgcmVuZGVyKCdzYXZlX2xpc3RfZm9ybTEnLCAnI3NhdmVfbGlzdF9mb3JtJywgZGF0YSlcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyB2YXIgcGFnZWlkMSA9ICQoJyNzYXZlX3NlbGVjdCcpLnZhbCgpIHx8IG51bGw7XHJcbi8vIHZhciBwYWdlT2JqID0gcGFnZWlkMSAhPSBudWxsID8geyBwYWdlaWQ6IHBhZ2VpZDEgfSA6IG51bGw7XHJcblxyXG5cclxuLyog6aaW5qyh6K+35rGC5pWw5o2uICovXHJcbiQuZ2V0KCdodHRwOi8vMTM5LjE5OS4xOTIuNDg6OTA5MC9hcGkvZ2V0bW9uZXljdHJsJywgZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuICAgIC8v5riy5p+T5qih5p2/XHJcbiAgICByZW5kZXIoJ3NhdmVfbGlzdF9mb3JtMScsICcjc2F2ZV9saXN0X2Zvcm0nLCBkYXRhKVxyXG5cclxuICAgIC8v6I635Y+Wb3B0aW9u6YeM55qE5YC8XHJcbiAgICB2YXIgcGFnZU51bSA9IE1hdGguY2VpbChkYXRhLnRvdGFsQ291bnQgLyBkYXRhLnBhZ2VzaXplKTtcclxuICAgIHZhciBwYWdlQXJyID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBhZ2VOdW0gKyAxOyBpKyspIHtcclxuICAgICAgICB2YXIgcGFnZSA9IGRhdGEucGFnZXNpemUgLyAxMCAqIGk7XHJcbiAgICAgICAgdmFyIHBhZ2UxID0gJyAgJyArIHBhZ2UgKyAnLycgKyBwYWdlTnVtO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhZ2UpXHJcbiAgICAgICAgcGFnZUFyci5wdXNoKHBhZ2UxKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHBhZ2VBcnIpXHJcblxyXG4gICAgJCgnI3NhdmVfc2VsZWN0JykuaHRtbCh0ZW1wbGF0ZSgnc2F2ZV9saXN0X3BhZ2UnLCB7IGl0ZW06IHBhZ2VBcnIgfSkpO1xyXG5cclxuICAgIC8vIHdpbmRvdy5wYWdlaWQgPSAkKCcjc2F2ZV9zZWxlY3QnKS52YWwoKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4vKiDpgInmi6nnv7vpobXlip/og70gKi9cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3NhdmVfc2VsZWN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgX3RoaXMgPSAkKHRoaXMpO1xyXG4gICAgcGFnZWlkID0gJCh0aGlzKS52YWwoKTtcclxuICAgIC8vIGxvY2F0aW9uLnNlYXJjaCA9ICc/cGFnZWlkPScgKyBwYWdlaWQ7XHJcbiAgICAvL+aUueWPmG9wdGlvbueahOmAieS4rVxyXG4gICAgLy8gY29uc29sZS5sb2cocGFnZWlkKVxyXG5cclxuICAgIHJlbmRlcjIocGFnZWlkKTtcclxufSlcclxuXHJcbi8qIOS4iuS4gOmhteWKn+iDvSAqL1xyXG4kKCcubGlzdF9oYW5kbGVfbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHBhZ2VpZCA9ICQoJyNzYXZlX3NlbGVjdCcpLnZhbCgpO1xyXG4gICAgcGFnZWlkLS07XHJcbiAgICBpZiAocGFnZWlkIDwgMSkge1xyXG4gICAgICAgIGFsZXJ0KFwi5bey57uP5piv56ys5LiA6aG15LqGXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gJCgnI3NhdmVfc2VsZWN0IG9wdGlvbicpLmVxKHBhZ2VpZCkuYXR0cignc2VsZWN0ZWQnLCB0cnVlKVxyXG4gICAgJChcIiNzYXZlX3NlbGVjdFwiKS52YWwocGFnZWlkKTtcclxuICAgIHJlbmRlcjIocGFnZWlkKTtcclxuXHJcbn0pXHJcblxyXG4vKiDkuIvkuIDpobXlip/og70gKi9cclxuJCgnLmxpc3RfaGFuZGxlX3JpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcGFnZWlkID0gJCgnI3NhdmVfc2VsZWN0JykudmFsKCk7XHJcbiAgICBwYWdlaWQrKztcclxuICAgIGlmIChwYWdlaWQgPiAxNSkge1xyXG4gICAgICAgIGFsZXJ0KFwi5bey57uP5piv5pyA5ZCO5LiA6aG15LqGXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gJCgnI3NhdmVfc2VsZWN0IG9wdGlvbicpLmVxKHBhZ2VpZCkuYXR0cignc2VsZWN0ZWQnLCB0cnVlKVxyXG4gICAgJChcIiNzYXZlX3NlbGVjdFwiKS52YWwocGFnZWlkKTtcclxuICAgIHJlbmRlcjIocGFnZWlkKTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjc2F2ZV9zZWxlY3QnLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XHJcbi8vICAgICB2YXIgcGFnZWlkID0gJCh0aGlzKS52YWwoKTtcclxuLy8gICAgIC8vIGxvY2F0aW9uLnNlYXJjaCA9ICc/cGFnZWlkPScgKyBwYWdlaWQ7XHJcbi8vICAgICByZW5kZXIyKHBhZ2VpZCk7XHJcblxyXG4vLyAgICAgLy/mlLnlj5hvcHRpb27nmoTpgInkuK1cclxuLy8gICAgICQoJy5saXN0X2hhbmRsZV9sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgdmFyIHBhZ2VpZExhc3QgPSBfdGhpcy52YWwoKTtcclxuLy8gICAgICAgICBwYWdlaWRMYXN0LS07XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocGFnZWlkTGFzdClcclxuLy8gICAgICAgICAkKCcjc2F2ZV9zZWxlY3Qgb3B0aW9uJykuZXEocGFnZWlkTGFzdCkuYXR0cignc2VsZWN0ZWQnLCB0cnVlKVxyXG4vLyAgICAgICAgIHJlbmRlcjIocGFnZWlkTGFzdCk7XHJcblxyXG4vLyAgICAgfSlcclxuXHJcbi8vIH0pIl19
