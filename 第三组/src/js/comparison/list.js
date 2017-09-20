require('../common/footer');
var util = require('../common/util');
var categoryid = util.getSearch("categoryId")
$.get('http://139.199.192.48:9090/api/getcategorybyid', { categoryid: categoryid }, function(data) {
        console.log(data.result[0])
        window.taxon = data.result[0].category;
        $('#headline').html(template("title-tpl", data.result[0]))
    })
    //商品列表
    // $.get("http://139.199.192.48:9090/api/getproductlist", { categoryid: categoryid }, function(data) {
    //     console.log(data)
    //     $('#ct_list').html(template("ct_list_tpl", data));
    // })
    // $ajax
    // async:false;
function render(categoryid, pageid) {
    $.get("http://139.199.192.48:9090/api/getproductlist", { categoryid: categoryid, pageid: pageid || 1 }, function(data) {
        data.taxon = window.taxon;
        console.log(data)
        window.totalPage = Math.ceil(data.totalCount / data.pagesize)
        window.pageArr = [];
        for (var i = 0; i < window.totalPage; i++) {
            window.pageArr[i] = i;
        }
        data.pageArr = window.pageArr;
        data.totalPage = window.totalPage
        var pageId = pageid || 1;
        $('#ct_list').html(template("ct_list_tpl", data));
        $("#selPage option").eq((pageId - 1)).attr("selected", true).siblings().attr("selected", false)
    })
}
render(categoryid)
$(document).on("change", "#selPage", function() {
    var pageid = $("#selPage option:selected").val();
    console.log(pageid)
    render(categoryid, pageid)
})
$(document).on("click", ".previous", function() {
    var pageid = $("#selPage option:selected").val();
    pageid--;
    if (pageid < 0) { pageid = 1 }
    render(categoryid, pageid)
})
$(document).on("click", ".next", function() {
    var pageid = $("#selPage option:selected").val();
    pageid++;
    if (pageid > window.totalPage) { pageid = window.totalPage }
    render(categoryid, pageid)
})