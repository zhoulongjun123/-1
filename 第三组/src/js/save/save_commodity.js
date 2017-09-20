var util = require('../common/util.js')
require('../common/footer.js');



var productid = util.getSearch('productid');
$.get('http://139.199.192.48:9090/api/getmoneyctrlproduct', { productid: productid }, function(data) {
    var html = template('commondity_tpl', data.result[0]);
    $('.commodity_init').html(html);

    var path = template('discount_path', data.result[0]);
    $('.path_view').append(path);
    $('.con').addClass('clearfix');


    /* 评论限制最小高度 */
    var lis = $('.list li');
    for (var i = 0; i < lis.length; i++) {;
        if (lis.height() < 100) {
            console.log(lis);
            lis.height(100);
        }
    }
})