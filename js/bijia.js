/**
 * Created by zzc on 2017/11/6.
 */
$(function () {
    var productid = tools.getParam("productid");
    $.ajax({
        url:mmp_api.bijiaImg,
        type:'get',
        data:{
            productid:productid
        },
        success: function (data) {
            $(".bijia_img_box").html( template("bijiaTmp",data) )
        }
    })
    $.ajax({
        url:mmp_api.bijiaCommont,
        type:'get',
        data:{
            productid:productid
        },
        success: function (data) {
            console.log(data);
            $(".bijia_commont_info").html( template("bijiaTmp2",data) )
        }
    })
})
