require('../common/footer')

function getSearch(key) {
    var searchStr = location.search.slice(1);
    var searchArr = searchStr.split('&');
    var searchObj = {},
        tempArr;

    for (var i = 0, len = searchArr.length; i < len; i++) {
        tempArr = searchArr[i].split('=');
        searchObj[tempArr[0]] = tempArr[1];
    }
    return key ? searchObj[key] : searchObj;
}
var couponId = getSearch('couponId');
$.get('http://139.199.192.48:9090/api/getcouponproduct', {
    couponid: couponId || 0
}, function(data) {
    $('.haitao-interface-content').html(template('discounts-coupt-tpl', data.result));
    $('.box-contain-ul').html(template('discounts-modalBox-tpl', data.result));
    $('.box-contain-ul').width((data.result.length + 2) * 200);
    $(document).on('click', '.media', function() {
        $('.modalBox').css('display', 'block');
        $('.box-contain-ul').css('margin-left', $(this).attr('data-cid') * 200 * -1);
    });

    $('.modalBox').on('click', function() {
        if ($(this).css('display') == 'block') {
            $(this).css('display', 'none');
        }
    })

});
// =========================模态框==================
$(".box-contain").css("margin-top", $('.modalBox').height() / 2 - $(".box-contain").height() / 2);
$(window).resize(function() {
    $(".box-contain").css('margin-top', $('.modalBox').height() / 2 - $(".box-contain").height() / 2);
});