/**
 * Created by zzc on 2017/11/5.
 */

//省钱扣页面渲染
$(function () {
    var productid = tools.getParam("productId");
    $.ajax({
        url:mmp_api.innerList,
        type:'get',
        data:{
            productid:productid
        },
        success: function (data) {
            console.log(data);
            $(".pro_container").html( template("proTmp",data) );
            $(".pro_comment").html( template("proTmp3",data) );
        }
    })
})

