/**
 * Created by zzc on 2017/11/6.
 */
$(function () {
    var brandtitleid = tools.getParam("brandtitleid");
    var pagesize = 4;
    $.ajax({
        url:mmp_api.bd_brand,
        type:'get',
        data:{
            brandtitleid:brandtitleid
        },
        success: function (data) {
            $(".bdHot_list").html( template("bdTmp",data) )
        }
    })
    $.ajax({
        url:mmp_api.bd_ductlist,
        type:'get',
        data:{
            brandtitleid:brandtitleid,
            pagesize:pagesize
        },
        success: function (data) {
            $(".pay_content").html( template("bdTmp2",data) )
        }
    })
    $.ajax({
        url:mmp_api.bd_com,
        type:'get',
        data:{
            productid :1,
        },
        success: function (data) {
            console.log(data);
            $(".new_content ul").html( template("bdTmp3",data) )
        }
    })
})