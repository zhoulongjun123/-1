// 点击商城导航页面置顶

var backTop = document.querySelector('#back_top');
backTop.onclick = function() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}