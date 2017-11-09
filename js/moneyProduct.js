/**
 * Created by zzc on 2017/11/5.
 */

//省钱扣页面渲染
$(function () {
    var productid = tools.getParam("productid");
    $.ajax({
        url:mmp_api.moneyCtrl2,
        type:'get',
        data:{
            productid:productid
        },
        success: function (data) {
            console.log(data);
            $(".pro_container").html( template("proTmp",data) );
            $("center").html( template("proTmp2",data) );
            $(".pro_comment").html( template("proTmp3",data) );
        }
    })
})

