/**
 * Created by zzc on 2017/11/6.
 */
$(function () {
    var couponid = tools.getParam("couponid")||0;
    console.log(couponid);
    var name ="";
    if(couponid==0) {
        name ="肯德基";
    }else if(couponid ==1) {
        name="必胜客";
    }
    else if(couponid ==2) {
        name="棒约翰";
    }
    else {
        name="哈根达斯";
    }
    console.log(name);
    $(".yhq_head h3").html(name +"优惠券");
    $.ajax({
        url:mmp_api.yhq_list,
        type:'get',
        data:{
            couponid:couponid
        },
        success: function (data) {
            console.log(data);
            $(".kfc_yhq").html( template("yhq_tmp",data) )
        }
    })
})