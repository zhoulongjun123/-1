(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('.back_to_top').on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 500);
})

$('.login').on('click', function() {
    alert('没有这个功能');
})
$('.register').on('click', function() {
    alert('没有这个功能');
})
},{}],2:[function(require,module,exports){
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
},{"../common/footer":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2Zvb3Rlci5qcyIsInNyYy9qcy9za2lwaG9wL3NraXBob3AtaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCcuYmFja190b190b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgNTAwKTtcclxufSlcclxuXHJcbiQoJy5sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgYWxlcnQoJ+ayoeaciei/meS4quWKn+iDvScpO1xyXG59KVxyXG4kKCcucmVnaXN0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KCfmsqHmnInov5nkuKrlip/og70nKTtcclxufSkiLCIvLyDllYbln47moI9cclxucmVxdWlyZSgnLi4vY29tbW9uL2Zvb3RlcicpXHJcbiQoXCIuaGQtbmF2LWxpc3QxXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtdG9nZ2xlXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdDEtZm9udFwiKS5wcm9wKFwiY2xhc3NcIiwgXCJmYSBmYS1jYXJldC11cFwiKTtcclxuICAgICAgICAgICAgJChcIi5za2lwaG9wLWhkLXdlYnNpdGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLXRvZ2dsZVwiLCBcImZhbHNlXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNsaXN0MS1mb250XCIpLnByb3AoXCJjbGFzc1wiLCBcImZhIGZhLWNhcmV0LWRvd25cIik7XHJcbiAgICAgICAgICAgICQoXCIuc2tpcGhvcC1oZC13ZWJzaXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLXRvZ2dsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOWcsOWMuuagj1xyXG4kKFwiLmhkLW5hdi1saXN0MlwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLXRvZ2dsZVwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAkKFwiI2xpc3QyLWZvbnRcIikucHJvcChcImNsYXNzXCIsIFwiZmEgZmEtY2FyZXQtdXBcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2tpcGhvcC1oZC1yZWdpb25cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLXRvZ2dsZVwiLCBcImZhbHNlIFwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdDItZm9udFwiKS5wcm9wKFwiY2xhc3NcIiwgXCJmYSBmYS1jYXJldC1kb3duXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNraXBob3AtaGQtcmVnaW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLXRvZ2dsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOS7t+agvOagj1xyXG4kKFwiLmhkLW5hdi1saXN0M1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLXRvZ2dsZVwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAkKFwiI2xpc3QzLWZvbnRcIikucHJvcChcImNsYXNzXCIsIFwiZmEgZmEtY2FyZXQtdXBcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2tpcGhvcC1oZC1wcmljZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cihcImRhdGEtdG9nZ2xlXCIsIFwiZmFsc2VcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2xpc3QzLWZvbnRcIikucHJvcChcImNsYXNzXCIsIFwiZmEgZmEtY2FyZXQtZG93blwiKTtcclxuICAgICAgICAgICAgJChcIi5za2lwaG9wLWhkLXByaWNlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLXRvZ2dsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOWIhuexu+agj1xyXG4kKFwiLnNraXBob3AtaGQtc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS10b2dnbGVcIikgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAkKFwiI2hkLXNlYXJjaC1pXCIpLnByb3AoXCJjbGFzc1wiLCBcImZhIGZhLXRpbWVzXCIpO1xyXG4gICAgICAgICQoXCIuc2tpcGhvcC1oZC1jbGFzc2lmeVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKFwiZGF0YS10b2dnbGVcIiwgXCJmYWxzZVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2hkLXNlYXJjaC1pXCIpLnByb3AoXCJjbGFzc1wiLCBcImZhIGZhLWxpc3RcIik7XHJcbiAgICAgICAgJChcIi5za2lwaG9wLWhkLWNsYXNzaWZ5XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQodGhpcykuYXR0cihcImRhdGEtdG9nZ2xlXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxuICAgIC8vIEV4YW1wbGUgb2YgdGltZXNcclxufSk7XHJcbi8vID09PT09PT09PT09PT096I635Y+W5bqX6ZO6PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGdldFNob3AoKSB7XHJcbiAgICAkLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldGdzc2hvcCcsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAkKCcuc2tpcGhvcC1oZC13ZWJzaXRlJykuaHRtbCh0ZW1wbGF0ZSgnc2tpcGhvcC1nZXRTaG9wJywgZGF0YS5yZXN1bHQpKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5nZXRTaG9wKCk7XHJcbi8vID09PT09PT09PT09PT096I635Y+W5Yy65Z+fPT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGdldEFyZWEoKSB7XHJcbiAgICAkLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldGdzc2hvcGFyZWEnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgJCgnLnNraXBob3AtaGQtcmVnaW9uJykuaHRtbCh0ZW1wbGF0ZSgnc2tpcGhvcC1nZXRBcmVhJywgZGF0YS5yZXN1bHQpKTtcclxuICAgIH0pXHJcblxyXG59XHJcbmdldEFyZWEoKTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gZ2V0UHJvZHVjdCgpIHtcclxuICAgICQuZ2V0KCdodHRwOi8vMTM5LjE5OS4xOTIuNDg6OTA5MC9hcGkvZ2V0Z3Nwcm9kdWN0Jywge1xyXG4gICAgICAgIHNob3BpZDogc2hvcGlkcyxcclxuICAgICAgICBhcmVhaWQ6IGFyZWFpZHNcclxuICAgIH0sIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAkKFwiLnNraXBob3AtbGlzdC1iZFwiKS5odG1sKHRlbXBsYXRlKCdza2lwaG9wLWdldExpc3QnLCBkYXRhLnJlc3VsdCkpO1xyXG4gICAgfSlcclxufVxyXG52YXIgc2hvcGlkcyA9IDA7XHJcbnZhciBhcmVhaWRzID0gMDtcclxuZ2V0UHJvZHVjdCgpO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4kKCcuc2tpcGhvcC1oZC13ZWJzaXRlJykub24oJ2NsaWNrJywgJy5nZXRTaG9wSUQnLCBmdW5jdGlvbigpIHtcclxuICAgIHNob3BpZHMgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXNob3BJZFwiKTtcclxuICAgIGdldFByb2R1Y3QoKTtcclxuICAgICQoJy5oZC1uYXYtbGlzdDEnKS5odG1sKCQodGhpcykudGV4dCgpICsgJyZuYnNwOzxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiIGlkPVwibGlzdDEtZm9udFwiPjwvaT4nKTtcclxuICAgICQoXCIuc2tpcGhvcC1oZC13ZWJzaXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgJCgnLmhkLW5hdi1saXN0MScpLmF0dHIoXCJkYXRhLXRvZ2dsZVwiLCBcInRydWVcIik7XHJcbiAgICAkKFwiI2xpc3QxLWZvbnRcIikucHJvcChcImNsYXNzXCIsIFwiZmEgZmEtY2FyZXQtZG93blwiKTtcclxufSlcclxuJCgnLnNraXBob3AtaGQtcmVnaW9uJykub24oJ2NsaWNrJywgJy5nZXRBcmVhSUQnLCBmdW5jdGlvbigpIHtcclxuICAgIGFyZWFpZHMgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWdldEFyZWFcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzaG9waWRzLCBhcmVhaWRzKTtcclxuICAgIGdldFByb2R1Y3QoKTtcclxuICAgICQoJy5oZC1uYXYtbGlzdDInKS5odG1sKCQodGhpcykudGV4dCgpLnNsaWNlKDAsIDIpICsgJyZuYnNwOzxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiIGlkPVwibGlzdDItZm9udFwiPjwvaT4nKTtcclxuICAgICQoXCIuc2tpcGhvcC1oZC1yZWdpb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAkKCcuaGQtbmF2LWxpc3QyJykuYXR0cihcImRhdGEtdG9nZ2xlXCIsIFwidHJ1ZVwiKTtcclxuICAgICQoXCIjbGlzdDItZm9udFwiKS5wcm9wKFwiY2xhc3NcIiwgXCJmYSBmYS1jYXJldC1kb3duXCIpO1xyXG59KTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbiQoJy5za2lwaG9wLWhkLXByaWNlJykub24oJ2NsaWNrJywgJ2EnLCBmdW5jdGlvbigpIHtcclxuICAgICQoJy5oZC1uYXYtbGlzdDMnKS5odG1sKCQodGhpcykudGV4dCgpICsgJyZuYnNwOzxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiIGlkPVwibGlzdDMtZm9udFwiPjwvaT4nKTtcclxuICAgICQoXCIuc2tpcGhvcC1oZC1wcmljZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICQoJy5oZC1uYXYtbGlzdDMnKS5hdHRyKFwiZGF0YS10b2dnbGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgJChcIiNsaXN0My1mb250XCIpLnByb3AoXCJjbGFzc1wiLCBcImZhIGZhLWNhcmV0LWRvd25cIik7XHJcbn0pOyJdfQ==
