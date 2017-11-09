/**
 * Created by zzc on 2017/11/5.
 */

$(function () {
    $(".mmp_nav").on("click",".more", function () {
        $(".nav_more").slideToggle(200);

    })
    $.ajax({
    url:mmp_api.nav,
    type:'get',
        success: function (data) {
            var result = data.result;
            console.log(result);
            for(var i=0;i<result.length;i++) {
                $(".nav_box").append(
                    '<li data-id="'+result[i].indexmenuId+'">' +
                    '<a href="'+result[i].titlehref+'">' +
                    ''+result[i].img+'' +
                    '<p>'+result[i].name+'</p>' +
                    '</a>' +
                    '</li>'
                )
            }
            $(".nav_box li[data-id=7]").nextAll().hide();
        }
    })
    $.ajax({
        url:mmp_api.discount,
        type:'get',
        dataType:'json',
        success: function (data) {
            var r = data.result;
            console.log(data);
            for(var i=0;i<r.length;i++) {
                $(".discount_box").append(
                '<li class="clearfix" data-id="'+ r[i].productId+'">'+
                '<a href="moneyProduct.html?productid='+r[i].productId+'">'+
                '   '+r[i].productImg2+''+
                '    <div class="proInfo">'+
                '    <p class="line2">'+r[i].productName+'<span>'+r[i].productPinkage+'</span>    </p>'+
                '<p class="clearfix">'+
                '    <span>'+r[i].productFrom+' | 10-25 14:10</span>'+
                '    <span class="fa fa-info-circle fr">'+r[i].productComCount+'</span>'+
                '</p>'+
                '</div>'+
                '</a>'+
                '</li>'
                )
            }
        }
    })
    //点击更多展示
    $(".nav_box").on("click","li[data-id=7]",function (e) {
        e.preventDefault();
        $(".nav_box li[data-id=7]").nextAll().toggle();
    })
})
