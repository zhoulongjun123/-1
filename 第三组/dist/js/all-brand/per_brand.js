(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"../common/footer":2}],2:[function(require,module,exports){
$('.back_to_top').on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 500);
})

$('.login').on('click', function() {
    alert('没有这个功能');
})
$('.register').on('click', function() {
    alert('没有这个功能');
})
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYWxsLWJyYW5kL3Blcl9icmFuZC5qcyIsInNyYy9qcy9jb21tb24vZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiDop6PmnpBsb2NhdGlvbi5zZWFyY2jvvJpcclxuICog5LygMeS4quWPguaVsOi/lOWbnuaMh+WummtleeeahOWAvO+8jOS4jeS8oOWPguaVsOi/lOWbnuino+aekOaIkOWvueixoeWQjueahOWAvOOAglxyXG4gKiAx44CB6aaW5YWI5oqK5aS06YOo55qEP+WOu+aOiVxyXG4gKiAy44CB6YCa6L+HJuespuWPt+WKiOaIkOS4gOe7hOe7hGtleT12YWzov5nmoLfnmoTlrZfnrKbkuLLnu4TmiJDnmoTmlbDnu4RcclxuICogM+OAgeeEtuWQjuWcqOmAmui/hz3lj7fmiorkuIDnu4Tnu4TlrZfnrKbkuLLliojlvIDojrflj5ZrZXnkuI52YWzvvIzlrZjlgqjliLDkuIDkuKrlr7nosaHkuK1cclxuICogNOOAgeWIpOaWreayoeacieS8oOWPgui/lOWbnui/meS4quWvueixoe+8jOS8oOS6hui/lOWbnuWvueixoeS4reaMh+WummtleeeahOWAvFxyXG4gKiAqL1xyXG5yZXF1aXJlKCcuLi9jb21tb24vZm9vdGVyJylcclxuXHJcbmZ1bmN0aW9uIGdldFNlYXJjaChrZXkpIHsgLy8gJz9jZ19pZD0xJmNnX3R5cGU9b3AnXHJcbiAgICB2YXIgc2VhcmNoU3RyID0gbG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpOyAvLyAnY2dfaWQ9MSZjZ190eXBlPW9wJ1xyXG4gICAgdmFyIHNlYXJjaEFyciA9IHNlYXJjaFN0ci5zcGxpdCgnJicpOyAvLyBbJ2NnX2lkPTEnLCAnY2dfdHlwZT1vcCddXHJcbiAgICB2YXIgc2VhcmNoT2JqID0ge30sXHJcbiAgICAgICAgdGVtcEFycjtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VhcmNoQXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGVtcEFyciA9IHNlYXJjaEFycltpXS5zcGxpdCgnPScpOyAvLyBbJ2NnX2lkJywgMV0gICAgWydjZ190eXBlJywgJ29wJ11cclxuICAgICAgICBzZWFyY2hPYmpbdGVtcEFyclswXV0gPSB0ZW1wQXJyWzFdOyAvLyB7IGNnX2lkOjEsIGNnX3R5cGU6ICdvcCcgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS8oOS6hmtleei/lOWbnuaMh+WumueahOWAvO+8jOayoeS8oOi/lOWbnuino+aekOWlveeahOaVtOS4quWvueixoVxyXG4gICAgcmV0dXJuIGtleSA/IHNlYXJjaE9ialtrZXldIDogc2VhcmNoT2JqO1xyXG59XHJcblxyXG4vLyDojrflj5blk4HniYzmoIfpopjnmoRpZFxyXG52YXIgYnJhbmR0aXRsZWlkID0gZ2V0U2VhcmNoKCdicmFuZFRpdGxlSWQnKTtcclxuXHJcblxyXG4vLyDmoLnmja7lk4HniYzmoIfnrb7nmoRpZOiOt+WPluaVsOaNrua4suafk+aooeadv++8jOa3u+WKoOeahOmhtemdolxyXG5cclxuXHJcbi8vIDEs5ZOB54mM5qCH6aKY5a+55bqU5Y2B5aSn5ZOB54mM6aG16Z2i5riy5p+TXHJcblxyXG4kLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldGJyYW5kJywgeyBicmFuZHRpdGxlaWQ6IGJyYW5kdGl0bGVpZCB9LCBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZSgnYnJhbmRfbGlzdF90cGwnLCBkYXRhLnJlc3VsdCk7XHJcbiAgICAkKCcjYnJhbmRfbGlzdF9hbGwnKS5odG1sKGh0bWwpO1xyXG4gICAgLy8g5YmN5LiJ5ZCN5o6S5YiX5YC85qC35byP5a6e546wXHJcblxyXG4gICAgJCgnI2lubmVyX2xpc3QgbGknKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5jc3MoeyAnYmFja2dyb3VuZCc6ICdicm93bicgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykuY3NzKHsgJ2JhY2tncm91bmQnOiAncmVkJyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS5jc3MoeyAnYmFja2dyb3VuZCc6ICdncmVlbicgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbn0pXHJcblxyXG5cclxuLy8g5Ya35pqW56m66LCD5Lqn5ZOB5o6S6KGM5qac55qE6aG16Z2i5riy5p+TXHJcblxyXG5cclxuXHJcbiQuZ2V0KCdodHRwOi8vMTM5LjE5OS4xOTIuNDg6OTA5MC9hcGkvZ2V0YnJhbmRwcm9kdWN0bGlzdCcsIHsgYnJhbmR0aXRsZWlkOiAxLCBwYWdlc2l6ZTogNiB9LCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKCdyYW5raW5nX3RwbCcsIGRhdGEucmVzdWx0KTtcclxuICAgICQoJyNyYW5raW5nX2xpc3QnKS5odG1sKGh0bWwpO1xyXG5cclxuXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG4vLyDplIDph4/mjpLooYzllYblk4HnmoTor4TorrrpobXpnaLmuLLmn5NcclxuXHJcblxyXG4kLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldHByb2R1Y3Rjb20nLCB7IHByb2R1Y3RpZDogYnJhbmR0aXRsZWlkIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHZhciBodG1sID0gdGVtcGxhdGUoJ3Blcl90cGwnLCBkYXRhLnJlc3VsdCk7XHJcbiAgICAkKCcjcGVyX2xpc3QnKS5odG1sKGh0bWwpO1xyXG5cclxufSkiLCIkKCcuYmFja190b190b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgNTAwKTtcclxufSlcclxuXHJcbiQoJy5sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgYWxlcnQoJ+ayoeaciei/meS4quWKn+iDvScpO1xyXG59KVxyXG4kKCcucmVnaXN0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSkiXX0=
