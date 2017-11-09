/**
 * Created by zzc on 2017/11/5.
 */
//接口  192.168.32.22
var ip = "192.168.32.22";
var mmp_api = {
    //首页导航页
    nav:"http://"+ip+":9090/api/getindexmenu",
    //商品详情页
    discount:"http://"+ip+":9090/api/getmoneyctrl",
    //分类页
    category:"http://"+ip+":9090/api/getcategorytitle",
    //分类清单
    cateList:"http://"+ip+":9090/api/getcategory",
    //商品列表 要传categoryid
    productIdList:"http://"+ip+":9090/api/getcategorybyid",
    productList:"http://"+ip+":9090/api/getproductlist",
    //商品详情页，图片
    bijiaImg:"http://"+ip+":9090/api/getproduct",
    bijiaCommont:"http://"+ip+":9090/api/getproductcom",
    //省钱控
    moneyCtrl1:"http://"+ip+":9090/api/getmoneyctrl",
    moneyCtrl2:"http://"+ip+":9090/api/getmoneyctrlproduct",
    //国内折扣
    inner:"http://"+ip+":9090/api/getinlanddiscount",
    innerList:"http://"+ip+":9090/api/getdiscountproduct",
    //白菜价
    bcj_title:"http://"+ip+":9090/api/getbaicaijiatitle",
    bcj_list:"http://"+ip+":9090/api/getbaicaijiaproduct",
    //优惠券
    yhq_name:"http://"+ip+":9090/api/getcoupon",
    yhq_list:"http://"+ip+":9090/api/getcouponproduct",
    //单品页面
    single_nav:"http://"+ip+":9090/api/getgsshop",
    single_list:"http://"+ip+":9090/api/getgsshoparea",
    single_pro:"http://"+ip+":9090/api/getgsproduct",
    //商城
    sitenav:"http://"+ip+":9090/api/getsitenav",
    //热门品牌
    bd_list:"http://"+ip+":9090/api/getbrandtitle",
    bd_brand:"http://"+ip+":9090/api/getbrand",
    bd_ductlist:"http://"+ip+":9090/api/getbrandproductlist",
    bd_com:"http://"+ip+":9090/api/getproductcom",
}

//返回顶部
$(".back").on("click", function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
})


class Tool {
    constructor(){}
    getParamObj(){
        var search = location.search;
        search = search.slice(1);
        var searchArr = search.split("&");
        var searchObj = {};
        for (var i = 0; i < searchArr.length; i++) {
            var key = searchArr[i].split("=")[0];
            var value = decodeURI(searchArr[i].split("=")[1]);
            //把属性名和值存储到对象中
            searchObj[key] = value;
        }
        return searchObj;
    }
    getParam(key){
        return this.getParamObj()[key];
    }
    checkLogin(data){
        if(data.error == 400) {
            location.href = "login.html?hrefAddr="+location.href;
        }
    }
}
var tools = new Tool();
