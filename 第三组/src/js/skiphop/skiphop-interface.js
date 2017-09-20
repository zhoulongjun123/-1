// 商城栏
require('../common/footer')
$(".hd-nav-list1").on("click", function() {
        if ($(this).attr("data-toggle") == "true") {
            $("#list1-font").prop("class", "fa fa-caret-up");
            $(".skiphop-hd-website").css("display", "block");
            $(this).attr("data-toggle", "false")
        } else {
            $("#list1-font").prop("class", "fa fa-caret-down");
            $(".skiphop-hd-website").css("display", "none");
            $(this).attr("data-toggle", "true");
        }
    })
    // 地区栏
$(".hd-nav-list2").on("click", function() {
        if ($(this).attr("data-toggle") == "true") {
            $("#list2-font").prop("class", "fa fa-caret-up");
            $(".skiphop-hd-region").css("display", "block");
            $(this).attr("data-toggle", "false ")
        } else {
            $("#list2-font").prop("class", "fa fa-caret-down");
            $(".skiphop-hd-region").css("display", "none");
            $(this).attr("data-toggle", "true");
        }
    })
    // 价格栏
$(".hd-nav-list3").on("click", function() {
        if ($(this).attr("data-toggle") == "true") {
            $("#list3-font").prop("class", "fa fa-caret-up");
            $(".skiphop-hd-price").css("display", "block");
            $(this).attr("data-toggle", "false")
        } else {
            $("#list3-font").prop("class", "fa fa-caret-down");
            $(".skiphop-hd-price").css("display", "none");
            $(this).attr("data-toggle", "true");
        }
    })
    // 分类栏
$(".skiphop-hd-search").on("click", function() {
    if ($(this).attr("data-toggle") == "true") {
        $("#hd-search-i").prop("class", "fa fa-times");
        $(".skiphop-hd-classify").css("display", "block");
        $(this).attr("data-toggle", "false")
    } else {
        $("#hd-search-i").prop("class", "fa fa-list");
        $(".skiphop-hd-classify").css("display", "none");
        $(this).attr("data-toggle", "true");
    }
    // Example of times
});
// ==============获取店铺==================
function getShop() {
    $.get('http://139.199.192.48:9090/api/getgsshop', function(data) {
        $('.skiphop-hd-website').html(template('skiphop-getShop', data.result));
    });

}
getShop();
// ==============获取区域==================
function getArea() {
    $.get('http://139.199.192.48:9090/api/getgsshoparea', function(data) {
        $('.skiphop-hd-region').html(template('skiphop-getArea', data.result));
    })

}
getArea();
// ================================
function getProduct() {
    $.get('http://139.199.192.48:9090/api/getgsproduct', {
        shopid: shopids,
        areaid: areaids
    }, function(data) {
        console.log(data);
        $(".skiphop-list-bd").html(template('skiphop-getList', data.result));
    })
}
var shopids = 0;
var areaids = 0;
getProduct();
// ==========================
$('.skiphop-hd-website').on('click', '.getShopID', function() {
    shopids = $(this).attr("data-shopId");
    getProduct();
    $('.hd-nav-list1').html($(this).text() + '&nbsp;<i class="fa fa-caret-down" id="list1-font"></i>');
    $(".skiphop-hd-website").css("display", "none");
    $('.hd-nav-list1').attr("data-toggle", "true");
    $("#list1-font").prop("class", "fa fa-caret-down");
})
$('.skiphop-hd-region').on('click', '.getAreaID', function() {
    areaids = $(this).attr("data-getArea");
    console.log(shopids, areaids);
    getProduct();
    $('.hd-nav-list2').html($(this).text().slice(0, 2) + '&nbsp;<i class="fa fa-caret-down" id="list2-font"></i>');
    $(".skiphop-hd-region").css("display", "none");
    $('.hd-nav-list2').attr("data-toggle", "true");
    $("#list2-font").prop("class", "fa fa-caret-down");
});
// ========================
$('.skiphop-hd-price').on('click', 'a', function() {
    $('.hd-nav-list3').html($(this).text() + '&nbsp;<i class="fa fa-caret-down" id="list3-font"></i>');
    $(".skiphop-hd-price").css("display", "none");
    $('.hd-nav-list3').attr("data-toggle", "true");
    $("#list3-font").prop("class", "fa fa-caret-down");
});