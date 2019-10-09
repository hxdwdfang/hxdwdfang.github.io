function getQueryVariable(variable) {


    var query = window.location.search.substring(1);

    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

// aid,sid
function check(aid,sid) {
  
    var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
            //在微信中打开
            $(".toast-wrap").show();
            // window.location='http://www.izhuixun.com/index.php/jump/'
            return false;
    }
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        // var loadDateTime = new Date();
        // window.setTimeout(function() {
        //  var timeOutDateTime = new Date();
        //  if (timeOutDateTime - loadDateTime < 5000) {
        
        //  window.location = "http://www.izhuixun.com/index.php/jump/"
        //  } else {
        //   window.close();
        //  }
        // },
        // 25);
        window.location.href = "izhuixun://newsinfo?aid=152&sid=19";
        // window.location = "izhuixun://newsinfo?aid=152&sid=19";
        //    window.location = "izhuixun://51wndk.net.cn/newsinfo?aid="+aid+"&sid="+sid;
       //  window.location = "izhuixun://[izhuixun:8080]/newsinfo/?aid=152&sid=19";
         

}
}
$(function () {

    let aid = getQueryVariable("aid");
    let sid = getQueryVariable("sid")
    $.ajax({
        url: "http://news.zrart.net.cn/newsapp/article/getArticleDetail?aid="+aid,

      //  url: "http://news.zrart.net.cn/newsapp/article/getArticleDetail?aid=152",
        type: "get",
        success: function (res) {

            $('.g-type').text("来自:" + res.data.source);
            $(".g-time").text(res.data.stime)
            $(".tname").text(res.data.tname)
            $('.g-title').text(res.data.title);
            $('.js-hot').text(res.data.hot)
            $('.content').html(res.data.content);
            $('.js-like').text(res.data.hot + '人喜欢');
            $(".author").text(res.data.author)
            $('.g-article ').show()
            $('.g-btn-open-newsapp').show();
            //    if(!res.data){
            //        window.location.href='./404.html'
            //        return false;
            //    }
        }

    })
    $('.js-open-newsapp').click(function () {
     
        check(aid,sid);
    //   check();
    });



})

function isAndroid_ios() {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    return isAndroid == true ? true : false;
}

