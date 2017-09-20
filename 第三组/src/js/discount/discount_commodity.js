var util = require('../common/util.js')
require('../common/footer.js')



var productid = util.getSearch('productid');
$.get('http://139.199.192.48:9090/api/getdiscountproduct', { productid: productid }, function(data) {
    console.log(data.result)
    var html = template('commondity_tpl', data.result[0]);
    $('.commodity_init').html(html);

    var path = template('discount_path', data.result[0]);
    $('.path_view').append(path);
})