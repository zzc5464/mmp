/**
 * Created by zzc on 2017/11/6.
 */
$(function () {
    $.ajax({
        url:mmp_api.sitenav,
        type:'get',
        success: function (data) {
            console.log(data);
            $(".sitemain").html( template("tmp1",data) )
        }
    })
})