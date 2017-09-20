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