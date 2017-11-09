/**
 * Created by zzc on 2017/11/6.
 */
//国内折扣渲染
$.ajax({
    url:mmp_api.inner,
    type:'get',
    success: function (data) {
        console.log(data);
        $(".tmpbox").html( template("tmp1",data) );
    }
})