// $(function() {
//     $('.pdf').media({width:450, height:350});
// });
// $('.btn').click(function(){
//     $(".pdf").show();
// });      //jquery.media.js阅读PDF文件的方法

window.onbeforeunload = function(){
    //刷新后页面自动回到顶部
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
};
// Echo.init({
//     offset: 100,//离可视区域多少像素的图片可以被加载
//     throttle: 2000 //图片延时多少毫秒加载
// });
$(".nav > li > a").click(function(){
    $('#collapse').addClass("collapsed");
    $('#collapse').attr("aria-expanded",false);
    $("#navbar-gbtag").removeClass("in");
    $("#navbar-gbtag").attr("aria-expanded",false);
});
$(document).ready(function () {

        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

        if (isIE || bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { //如果是移动端，就不执行
            return;
        } else {        //PC端再执行

            var $animatedElements = $('p, h1, h2, h3, h4, h5, a, button, small, img, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info').not(function() {
                return $(this).parents().is('.navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, .extFooter1, #scrollToTop');
            }).addClass('hidden animated');
            // console.log($animatedElements);

            for(var i=0;i< $animatedElements.length;i++) {
                if ($($animatedElements[i]).parents().is('.take1')) {
                    $($animatedElements[i]).removeClass('hidden').addClass('fadeInUp')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $($animatedElements[i]).removeClass('animated fadeInUp');
                        });
                }
            }

            $(window).scroll(function () {

                for(var i=0;i< $animatedElements.length;i++) {
                    var ch = document.documentElement.clientHeight;//窗口的高度
                    // console.log(ch);
                    var clientHeight = document.body.clientHeight;      //当前页面的可视高度
                    var top = $(document).scrollTop();      //滚动条到顶部的垂直高度

                    // var take1 =$('.take1')[0].offsetTop;        //判断父级元素到窗口的offesttop
                    var take2 =$('.take2')[0].offsetTop;
                    var take3 =$('.take3')[0].offsetTop;
                    var take4 =$('.take4')[0].offsetTop;
                    var take5 =$('.take5')[0].offsetTop;
                    var take6 =$('.take6')[0].offsetTop;

                    if (top >= take2 - ch +300) {   //
                        if($($animatedElements[i]).parents().is('.take2')){
                            $($animatedElements[i]).removeClass('hidden').addClass('fadeInUp')
                                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    $($animatedElements[i]).removeClass('animated fadeInUp');
                                });
                        }
                    }
                    if (top >= take3 - ch +500) {   //
                        if($($animatedElements[i]).parents().is('.take3')){
                            $($animatedElements[i]).removeClass('hidden').addClass('fadeInUp')
                                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    $($animatedElements[i]).removeClass('animated fadeInUp');
                                });
                        }
                    }
                    if (top >= take4 - ch + 500) {   //
                        if($($animatedElements[i]).parents().is('.take4')){
                            $($animatedElements[i]).removeClass('hidden').addClass('fadeInUp')
                                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    $($animatedElements[i]).removeClass('animated fadeInUp');
                                });
                        }
                    }
                    if (top >= take5 - ch + 550) {   //
                        if($($animatedElements[i]).parents().is('.take5')){
                            $($animatedElements[i]).removeClass('hidden').addClass('fadeInUp')
                                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    $($animatedElements[i]).removeClass('animated fadeInUp');
                                });
                        }
                    }
                    if (top >= take6 - ch) {   //
                        if($($animatedElements[i]).parents().is('.take6')){
                            $($animatedElements[i]).removeClass('hidden').addClass('fadeInUp')
                                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    $($animatedElements[i]).removeClass('animated fadeInUp');
                                });
                        }
                    }

                }
            });

        }

});
