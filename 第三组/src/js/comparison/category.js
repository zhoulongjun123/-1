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