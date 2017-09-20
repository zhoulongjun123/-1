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