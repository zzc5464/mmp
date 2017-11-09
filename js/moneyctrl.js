/**
 * Created by zzc on 2017/11/6.
 */
$(function () {

    var totalPages = 0;
    var pages = [];
    var pageid = tools.getParam("pageid")||1;
    $.ajax({
        url:mmp_api.moneyCtrl1,
        type:'get',
        data:{
            pageid:pageid
        },
        success: function (data) {
            totalPages =Math.ceil(data.totalCount / data.pagesize);
            for(var i=1;i<=totalPages;i++) {
                pages.push(i);
            }
            data.totalPages = totalPages;
            data.pages = pages;
            console.log(data);
            $(".tmp_ul").html( template("cqkTmp",data) )
            $(".page").html( template("cqkTmp2",data) )
            $("#pageSum").val(pageid);
        }
    })

    $(".page").on("click",".page_up", function () {
        pageid--;
        pageid=pageid<=1?1:pageid;
        location.href = "/moneyctrl.html?pageid="+pageid;
    })
    $(".page").on("click",".page_down", function () {
        pageid++;
        pageid=pageid>=totalPages?totalPages:pageid;
        location.href = "/moneyctrl.html?pageid="+pageid;
    })
    $(".page").on("change","#pageSum", function () {
        pageid++;
        var value = $(this).val();
        location.href = "/moneyctrl.html?pageid="+value;
    })
})