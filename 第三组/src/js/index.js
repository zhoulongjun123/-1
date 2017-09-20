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