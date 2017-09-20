var util = require('../common/util');
require('../common/footer');
var productid = util.getSearch("productId");
var taxon = util.getSearch("taxon");
var name = util.getSearch("name");
$.get("http://139.199.192.48:9090/api/getproduct", { productid: productid }, function(data) {
    console.log(data)
    data.result[0].name = decodeURI(name);
    data.result[0].taxon = decodeURI(taxon);
    window.bjShop = data.result[0].bjShop;
    $(".screening").html(template("scr-tpl", data.result[0]))
    $(".message").html(template("mes-tpl", data.result[0]))
})
$.get("http://139.199.192.48:9090/api/getproductcom", { productid: productid }, function(data) {
    console.log(data)
    data.bjShop = window.bjShop;
    $(".eva").html(template("eva-tpl", data))

})