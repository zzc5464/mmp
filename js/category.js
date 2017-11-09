/**
 * Created by zzc on 2017/11/5.
 */

$(function () {
    $.ajax({
        type:'get',
        url:mmp_api.category,
        success: function (data) {
            $(".cateList").html( template("cateTmp",data) )
        }
    })

    $(".cate_box").on("click",".cate_title", function () {
        $this = $(this);
        $this.siblings(".cate_content").toggleClass("show");
        var id = $(this).data("id");
        $.ajax({
            type:'get',
            data:{
                titleid:id
            },
            url:mmp_api.cateList,
            success: function (data) {
                console.log(data);
                //?categoryid=0&category=电视&pageid=1
                $this.siblings(".cate_content").html( template("cateTmp2",data) );
            }
        })
    })

})

