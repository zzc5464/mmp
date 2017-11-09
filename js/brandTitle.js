/**
 * Created by zzc on 2017/11/6.
 */
$(function () {
    $.ajax({
        url:mmp_api.bd_list,
        type:'get',
        success: function (data) {
            console.log(data);
            $(".hot_content").html( template("bdTmp",data) )
        }
    })
})