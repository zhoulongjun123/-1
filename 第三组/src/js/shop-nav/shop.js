var a = 100;

// get请求渲染页面

$.get('http://139.199.192.48:9090/api/getsitenav', function(data) {
    var html = template('shop_tpl', data.result);
    $('#shop_list').html(html);
})



// 点击商城导航页面置顶

var shopBtn = document.querySelector('.shop_btn');
shopBtn.onclick = function() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}