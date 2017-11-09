/**
 * Created by zzc on 2017/11/6.
 */
$(function () {
    var titleid = tools.getParam("titleid")||0;
    $.ajax({
        url:mmp_api.bcj_title,
        type:'get',
        success: function (data) {
            data.titleid = titleid;
            var len = data.result.length+1;
            $(".bcj_nav").html( template("bcjTmp1",data) );
            var liWidth = $("#wrapper > ul li").outerWidth(true);
            $("#wrapper > ul").css({
                width:len*liWidth+40
            })
        }
    })
    //等dom加载完再执行
    setTimeout(function () {
        var myScroll = new IScroll('#wrapper',{
            //scrollbars: true,
            scrollX:true,
        });
    },100)

    $.ajax({
        url:mmp_api.bcj_list,
        type:'get',
        data:{
            titleid:titleid
        },
        success: function (data) {
            console.log(data);
            $("main ul").html( template("bcjTmp2",data) );
        }
    })
})