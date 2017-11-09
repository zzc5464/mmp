/**
 * Created by zzc on 2017/11/6.
 */
$(function () {
    var shopid = 0;
    var areaid = 0;
    function render(shopid,areaid){
        $.ajax({
            url:mmp_api.single_pro,
            type:'get',
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success: function (data) {
                console.log(data);
                $(".gs_main ul").html( template("tmp3",data) )
            }
        })
    }
    render(shopid,areaid);
    $("#gs_jd").on("click", function () {
        $.ajax({
            url:mmp_api.single_nav,
            type:'get',
            success: function (data) {
                console.log(data);
                $(".search_source")
                    .toggleClass("gs_height")
                    .html( template("tmp1",data) )
            }
        })
    })
    $("#gs_px").on("click", function () {
        $.ajax({
            url:mmp_api.single_list,
            type:'get',
            success: function (data) {
                $(".search_map")
                    .toggleClass("gs_height")
                    .html( template("tmp2",data) )
            }
        })
    })
    $("#gs_all").on("click", function () {
        $(".search_all").toggleClass("gs_height");
    })

    $(".search_list").on("click",".search_source li", function () {
       var $this = $(this);
        shopid = $this.data("shopid");
        var txt = $this.html();
        $("#gs_jd span").html(txt);
        $(".search_source").removeClass("gs_height");
        render(shopid,areaid);
    })
    $(".search_list").on("click",".search_map li", function () {
        var $this = $(this);
        areaid = $this.data("areaid");
        console.log(areaid);
        var txt = $this.html();
        $("#gs_px span").html(txt);
        $(".search_map").removeClass("gs_height");
        render(shopid,areaid);
    })
})