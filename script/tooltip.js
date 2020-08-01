function simple_tooltip(target_items, name){ // item是显示提示条的元素名称，name为提示条的class名称
 $(target_items).each(function(i){
	 // 在网页中添加一个lass名称为name的div元素，作为提示条的容器。其中包含一个p元素，用于显示提示条的内容（内容为元素的title属性值）
		$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
		var my_tooltip = $("#"+name+i);
		//title属性值不为空时显示提示条
		if($(this).attr("title") != "" && $(this).attr("title") != "undefined" ){
		
		$(this).removeAttr("title").mouseover(function(){
					my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);  //N淡入显示提示条
		}).mousemove(function(kmouse){  //移动鼠标时设置提示条的位置和大小
				var border_top = $(window).scrollTop(); 
				var border_right = $(window).width();
				var left_pos;
				var top_pos;
				var offset = 20;
				if(border_right - (offset *2) >= my_tooltip.width() + kmouse.pageX){
					left_pos = kmouse.pageX+offset;
					} else{
					left_pos = border_right-my_tooltip.width()-offset;
					}
					
				if(border_top + (offset *2)>= kmouse.pageY - my_tooltip.height()){
					top_pos = border_top +offset;
					} else{
					top_pos = kmouse.pageY-my_tooltip.height()-offset;
					}	
				
				
				my_tooltip.css({left:left_pos, top:top_pos});
		}).mouseout(function(){  // 鼠标移出时隐藏提示条
				my_tooltip.css({left:"-9999px"});				  
		});
		
		}
		
	});
}

