var pageID = 1;
$.get('http://139.199.192.48:9090/api/getmoneyctrl', {
    pageid: pageID
}, function(data) {
    data.ceiling = Math.ceil(data.totalCount / data.pagesize);
    $(".haitao-bottom-td2").html(template('haitaokou-opt-tpl', data));
    console.log($("option[data-id]"));
})
$(document).on('change', '#pageChange', function() {
    pageID = $('#pageChange option:selected').attr('data-id');
    console.log(pageID);
    loading();
})


function loading() {
    $.get('http://139.199.192.48:9090/api/getmoneyctrl', {
        pageid: pageID
    }, function(data) {
        $(".haitao-interface-content").html(template('haitaokou-itf-tpl', data.result));
    });
}
loading();
$(".bottom-btn-pre").on('click', function() {
    if (pageID == 1) {
        return;
    } else {
        pageID--;
    }
    // $("option[data-id]").removeAttr("selected");
    // $("option[data-id=" + pageID + "]").attr("selected", "selected");
    loading();
    console.log(pageID);
    $('#pageChange').val(pageID);
});
$(".bottom-btn-next").on('click', function() {
    if (pageID == 15) {
        return;
    } else {
        pageID++;
    }
    // $("option[data-id]").removeAttr("selected");
    // $("option[data-id=" + pageID + "]").attr("selected", "selected");
    loading();
    console.log(pageID);
    $('#pageChange').val(pageID);
});