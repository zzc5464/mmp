$(function () {

    var categoryid = tools.getParam("categoryid");
    var category = tools.getParam("category");
    var pageid = parseInt(tools.getParam("pageid"));
    $(".page_up a").on("click", function () {
        pageid--;
        pageid = pageid<=1?1:pageid;
        console.log(pageid);
        location.href = "productlist.html?categoryid=" + categoryid + "&category=" + category + "&pageid=" + pageid
    })
    $(".page_down a").on("click", function () {
        pageid++;
        pageid = pageid>=3?3:pageid;
        console.log(pageid);
        location.href = "productlist.html?categoryid=" + categoryid + "&category=" + category + "&pageid=" + pageid
    })
    $("#pageSum").val(pageid);
    $("#pageSum").on("change", function () {
        var value = $(this).val();
        location.href = "productlist.html?categoryid=" + categoryid + "&category=" + category + "&pageid=" + value

    })
    //渲染nav
    $.ajax({
        type:'get',
        url:mmp_api.productIdList,
        data:{
            categoryid:categoryid
        },
        success: function (data) {
            $("nav").html(
                '<a href="index.html">首页</a>' +
                '>' +
                '<a href="category.html">全部分类</a>' +
                '>' +
                '<a href="#" id="cateLink">'+data.result[0].category+'</a>' +
                '<button>筛选</button>'
            )
        }
    })
//?categoryid=0&category=电视&pageid=1
    //categoryid=0&pageid=2

    //渲染当前页面
    render();
    function render(){
        $.ajax({
            type:'get',
            url:mmp_api.productList,
            data:{
                categoryid:categoryid,
                pageid:pageid==0?1:pageid
            },
            success: function (data) {
                console.log(pageid);
                console.log(data);
                var result = data.result;
                for(var i=0;i<result.length;i++) {
                    $(".pro_box").append(
                        '<li>' +
                        '<a href="bijia.html?productid='+result[i].productId+'">' +
                        ''+result[i].productImg+'' +
                        '<div class="pro_info">' +
                        '<p class="pro_name line2">'+result[i].productName+'</p>' +
                        '<p class="price">'+result[i].productPrice+'</p>' +
                        '<span class="num">'+result[i].productQuote+'</span>' +
                        ' <span class="comment">'+result[i].productCom+'</span>' +
                        '</div></a></li>'
                    )
                }
            }
        })

    }
})
