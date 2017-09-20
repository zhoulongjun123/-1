require('../common/footer')
    // get 请求渲染页面
$.get('http://139.199.192.48:9090/api/getbrandtitle', function(data) {

    var html = template('brand_tpl', data.result);
    $('#brand_list').append(html);

})