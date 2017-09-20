(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var pageID = 1;
$.get('http://139.199.192.48:9090/api/getmoneyctrl', {
    pageid: pageID
}, function(data) {
    data.ceiling = Math.ceil(data.totalCount / data.pagesize);
    $(".haitao-bottom-td2").html(template('haitaokou-opt-tpl', data));
    console.log($("option[data-id]"));
})
$(document).on('change', '#pageChange', function() {
    pageID = $('#pageChange option:selected').attr('data-id');
    console.log(pageID);
    loading();
})


function loading() {
    $.get('http://139.199.192.48:9090/api/getmoneyctrl', {
        pageid: pageID
    }, function(data) {
        $(".haitao-interface-content").html(template('haitaokou-itf-tpl', data.result));
    });
}
loading();
$(".bottom-btn-pre").on('click', function() {
    if (pageID == 1) {
        return;
    } else {
        pageID--;
    }
    // $("option[data-id]").removeAttr("selected");
    // $("option[data-id=" + pageID + "]").attr("selected", "selected");
    loading();
    console.log(pageID);
    $('#pageChange').val(pageID);
});
$(".bottom-btn-next").on('click', function() {
    if (pageID == 15) {
        return;
    } else {
        pageID++;
    }
    // $("option[data-id]").removeAttr("selected");
    // $("option[data-id=" + pageID + "]").attr("selected", "selected");
    loading();
    console.log(pageID);
    $('#pageChange').val(pageID);
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaGFpdGFva291L2hhaXRhb2tvdS1pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBwYWdlSUQgPSAxO1xyXG4kLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldG1vbmV5Y3RybCcsIHtcclxuICAgIHBhZ2VpZDogcGFnZUlEXHJcbn0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGRhdGEuY2VpbGluZyA9IE1hdGguY2VpbChkYXRhLnRvdGFsQ291bnQgLyBkYXRhLnBhZ2VzaXplKTtcclxuICAgICQoXCIuaGFpdGFvLWJvdHRvbS10ZDJcIikuaHRtbCh0ZW1wbGF0ZSgnaGFpdGFva291LW9wdC10cGwnLCBkYXRhKSk7XHJcbiAgICBjb25zb2xlLmxvZygkKFwib3B0aW9uW2RhdGEtaWRdXCIpKTtcclxufSlcclxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjcGFnZUNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgcGFnZUlEID0gJCgnI3BhZ2VDaGFuZ2Ugb3B0aW9uOnNlbGVjdGVkJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgY29uc29sZS5sb2cocGFnZUlEKTtcclxuICAgIGxvYWRpbmcoKTtcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkaW5nKCkge1xyXG4gICAgJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRtb25leWN0cmwnLCB7XHJcbiAgICAgICAgcGFnZWlkOiBwYWdlSURcclxuICAgIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAkKFwiLmhhaXRhby1pbnRlcmZhY2UtY29udGVudFwiKS5odG1sKHRlbXBsYXRlKCdoYWl0YW9rb3UtaXRmLXRwbCcsIGRhdGEucmVzdWx0KSk7XHJcbiAgICB9KTtcclxufVxyXG5sb2FkaW5nKCk7XHJcbiQoXCIuYm90dG9tLWJ0bi1wcmVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAocGFnZUlEID09IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhZ2VJRC0tO1xyXG4gICAgfVxyXG4gICAgLy8gJChcIm9wdGlvbltkYXRhLWlkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7XHJcbiAgICAvLyAkKFwib3B0aW9uW2RhdGEtaWQ9XCIgKyBwYWdlSUQgKyBcIl1cIikuYXR0cihcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XHJcbiAgICBsb2FkaW5nKCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlSUQpO1xyXG4gICAgJCgnI3BhZ2VDaGFuZ2UnKS52YWwocGFnZUlEKTtcclxufSk7XHJcbiQoXCIuYm90dG9tLWJ0bi1uZXh0XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHBhZ2VJRCA9PSAxNSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFnZUlEKys7XHJcbiAgICB9XHJcbiAgICAvLyAkKFwib3B0aW9uW2RhdGEtaWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTtcclxuICAgIC8vICQoXCJvcHRpb25bZGF0YS1pZD1cIiArIHBhZ2VJRCArIFwiXVwiKS5hdHRyKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcclxuICAgIGxvYWRpbmcoKTtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2VJRCk7XHJcbiAgICAkKCcjcGFnZUNoYW5nZScpLnZhbChwYWdlSUQpO1xyXG59KTsiXX0=
