/**
 * Created by zzc on 2017/11/6.
 */
$(function () {
    $.ajax({
        url:mmp_api.yhq_name,
        type:'get',
        success: function (data) {
            console.log(data);
            $(".yhq_list").html( template("yhqTmp1",data) )
        }
    })
})