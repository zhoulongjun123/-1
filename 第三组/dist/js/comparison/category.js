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
$.get('http://139.199.192.48:9090/api/getcategorytitle', function(data) {
    $("#v_title").html(template("title-tpl", data.result));
    init()
})


function init() {
    $('.fl_t').each(function(index, fl_t) {
        var flag = true;
        $(this).on("click", function() {
            var titleid = $(this).attr('data-id');
            if (flag) {
                $(this).children('a').css("background-image", "url('/public/images/arrow2.gif')").siblings('.fl_t>a').css("background-image", "url('/public/images/arrow1.gif')");
                $('.fl_all').eq(index).css("display", 'block').siblings('.fl_all').css("display", "none");
                flag = false;
            } else {
                $(this).children('a').css("background-image", "url('/public/images/arrow1.gif')");
                $('.fl_all').eq(index).css("display", "none");
                flag = true;
            }
            getList(index, titleid)
        })
    })

}

function getList(index, tId) {
    console.log(tId)
    $.get("http://139.199.192.48:9090/api/getcategory", { titleid: tId }, function(data) {
        console.log(data.result)
        $('.fl_all').eq(index).html(template("cg_list_tpl", data.result));
        $('.fl_all').eq(0).append('<li><a href="javascript:;"></a></li>' + '<li><a href="javascript:;"></a></li>')
        $('.fl_all').eq(1).append('<li><a href="javascript:;"></a></li>' + '<li><a href="javascript:;"></a></li>')
        $('.fl_all').eq(3).append('<li><a href="javascript:;"></a></li>')
        $('.fl_all').eq(6).append('<li><a href="javascript:;"></a></li>')
        $('.fl_all').eq(7).append('<li><a href="javascript:;"></a></li>')
    })
}
},{"../common/footer":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9jb21wYXJpc29uL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoJy5iYWNrX3RvX3RvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA1MDApO1xyXG59KVxyXG5cclxuJCgnLmxvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgn5rKh5pyJ6L+Z5Liq5Yqf6IO9Jyk7XHJcbn0pXHJcbiQoJy5yZWdpc3RlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgYWxlcnQoJ+ayoeaciei/meS4quWKn+iDvScpO1xyXG59KSIsInJlcXVpcmUoJy4uL2NvbW1vbi9mb290ZXInKVxyXG4kLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldGNhdGVnb3J5dGl0bGUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAkKFwiI3ZfdGl0bGVcIikuaHRtbCh0ZW1wbGF0ZShcInRpdGxlLXRwbFwiLCBkYXRhLnJlc3VsdCkpO1xyXG4gICAgaW5pdCgpXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICQoJy5mbF90JykuZWFjaChmdW5jdGlvbihpbmRleCwgZmxfdCkge1xyXG4gICAgICAgIHZhciBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAkKHRoaXMpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZWlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgnL3B1YmxpYy9pbWFnZXMvYXJyb3cyLmdpZicpXCIpLnNpYmxpbmdzKCcuZmxfdD5hJykuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgnL3B1YmxpYy9pbWFnZXMvYXJyb3cxLmdpZicpXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmZsX2FsbCcpLmVxKGluZGV4KS5jc3MoXCJkaXNwbGF5XCIsICdibG9jaycpLnNpYmxpbmdzKCcuZmxfYWxsJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgnL3B1YmxpYy9pbWFnZXMvYXJyb3cxLmdpZicpXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmZsX2FsbCcpLmVxKGluZGV4KS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldExpc3QoaW5kZXgsIHRpdGxlaWQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaXN0KGluZGV4LCB0SWQpIHtcclxuICAgIGNvbnNvbGUubG9nKHRJZClcclxuICAgICQuZ2V0KFwiaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldGNhdGVnb3J5XCIsIHsgdGl0bGVpZDogdElkIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdClcclxuICAgICAgICAkKCcuZmxfYWxsJykuZXEoaW5kZXgpLmh0bWwodGVtcGxhdGUoXCJjZ19saXN0X3RwbFwiLCBkYXRhLnJlc3VsdCkpO1xyXG4gICAgICAgICQoJy5mbF9hbGwnKS5lcSgwKS5hcHBlbmQoJzxsaT48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjwvbGk+JyArICc8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48L2xpPicpXHJcbiAgICAgICAgJCgnLmZsX2FsbCcpLmVxKDEpLmFwcGVuZCgnPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+PC9saT4nICsgJzxsaT48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjwvbGk+JylcclxuICAgICAgICAkKCcuZmxfYWxsJykuZXEoMykuYXBwZW5kKCc8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48L2xpPicpXHJcbiAgICAgICAgJCgnLmZsX2FsbCcpLmVxKDYpLmFwcGVuZCgnPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+PC9saT4nKVxyXG4gICAgICAgICQoJy5mbF9hbGwnKS5lcSg3KS5hcHBlbmQoJzxsaT48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjwvbGk+JylcclxuICAgIH0pXHJcbn0iXX0=
