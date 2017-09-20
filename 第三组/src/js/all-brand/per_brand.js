/**
 * 解析location.search：
 * 传1个参数返回指定key的值，不传参数返回解析成对象后的值。
 * 1、首先把头部的?去掉
 * 2、通过&符号劈成一组组key=val这样的字符串组成的数组
 * 3、然后在通过=号把一组组字符串劈开获取key与val，存储到一个对象中
 * 4、判断没有传参返回这个对象，传了返回对象中指定key的值
 * */
require('../common/footer')

function getSearch(key) { // '?cg_id=1&cg_type=op'
    var searchStr = location.search.slice(1); // 'cg_id=1&cg_type=op'
    var searchArr = searchStr.split('&'); // ['cg_id=1', 'cg_type=op']
    var searchObj = {},
        tempArr;

    for (var i = 0, len = searchArr.length; i < len; i++) {
        tempArr = searchArr[i].split('='); // ['cg_id', 1]    ['cg_type', 'op']
        searchObj[tempArr[0]] = tempArr[1]; // { cg_id:1, cg_type: 'op' }
    }

    // 传了key返回指定的值，没传返回解析好的整个对象
    return key ? searchObj[key] : searchObj;
}

// 获取品牌标题的id
var brandtitleid = getSearch('brandTitleId');


// 根据品牌标签的id获取数据渲染模板，添加的页面


// 1,品牌标题对应十大品牌页面渲染

$.get('http://139.199.192.48:9090/api/getbrand', { brandtitleid: brandtitleid }, function(data) {

    var html = template('brand_list_tpl', data.result);
    $('#brand_list_all').html(html);
    // 前三名排列值样式实现

    $('#inner_list li').each(function(index, value) {

        switch (index) {

            case 0:
                $(this).find('span').css({ 'background': 'brown' });
                break;
            case 1:
                $(this).find('span').css({ 'background': 'red' });
                break;
            case 2:
                $(this).find('span').css({ 'background': 'green' });
                break;
        }

    })

})


// 冷暖空调产品排行榜的页面渲染



$.get('http://139.199.192.48:9090/api/getbrandproductlist', { brandtitleid: 1, pagesize: 6 }, function(data) {
    var html = template('ranking_tpl', data.result);
    $('#ranking_list').html(html);



})



// 销量排行商品的评论页面渲染


$.get('http://139.199.192.48:9090/api/getproductcom', { productid: brandtitleid }, function(data) {
    var html = template('per_tpl', data.result);
    $('#per_list').html(html);

})