
$(document).ready(function(){
    $(".bbs header span").click(function(){
        $(".bbs .post").show();
    });
    var tou=new Array("images/tx.jpg","images/tx.jpg","images/tx.jpg","images/tx.jpg");
    $(".post .btn").click(function(){
        var $newLi=$("<li></li>");  //创建一个新的li节点元素
        var iNum=Math.floor(Math.random()*4);  //随机获取头像
        var $touImg=$("<div><img src=images/"+tou[iNum]+"></div>");  //创建头像节点
        var $title=$("<h1>"+$(".title").val()+"</h1>"); //设置标题
        var newP=$("<p></p>");  //创建一个新的p节点元素
        var myDate=new Date();
        var currentDate=myDate.getFullYear()+"-"+parseInt(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
        $(newP).append("<span style='font-size: 16px;color:#0000FF'>"+$(".post .content").val()+"</span>"+"<br>");
        $(newP).append("<span>版块："+$(".post select").val()+"</span>");  //在p节点中插入版块；
        $(newP).append("<span>发表时间："+currentDate+"</span>");     //在p节点中插入发布时间；
        $($newLi).append($touImg);  //插入头像
        $($newLi).append($title);   //插入标题
        $($newLi).append(newP);    //插入版块、时间内容
        $(".bbs section ul").prepend($newLi);

        $(".post .content").val("");
        $(".post .title").val("");
        $(".post").hide();

    });
})