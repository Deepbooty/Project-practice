$(function(){
	//点击关键字弹出下拉菜单
	$(".secrch_tym").click(function(event){
		$(".tym_drop").css("display") == "none" ? $(".tym_drop").css("display", "block") : $(".tym_drop").css("display", "none");
	 	event.stopPropagation();
	});
	
	//点击切换关键字
	$(".tym_txt").click(function(){
		$(this).parent().parent().find(".secrch_tym").html($(this).text());
		if($(this).attr("ym")=="a"){
			$("#search1").show();
			$("#search2").hide();
			}
		else{
			$("#search2").show();
			$("#search1").hide();
			}
		$(".secrch_tym").attr("ym", $(this).attr("ym"));
		$(this).parent().hide();
	});
	
	//幻灯片
	//创建底下小图标并切换
	var i_num=0;//定义一个变量  用于循环
	var clone=$(".banner .img li").first().clone();//复制一张l
	var size=$(".banner .img li").length;  //定义一个size变量 获取这个img下的li的
	for(var j=0;j<size;j++){
		$(".banner .num ").append("<li></li>");
		$(".banner .num li").first().addClass("on");  //给第一个li加样式
		$(".banner .num li").hover(function(){
			var i_num1=$(".banner .num li").index(this);// 当前的原点的索引值存储起
			$(this).addClass("on").siblings("li").removeClass("on");
			$(".img li").eq(i_num1).fadeIn('slow').siblings("li").fadeOut('slow');
			i_num=i_num1;
		});
	}
	//左边箭头点击时切换
	$(".prev").click(function(){
	if(i_num==0){i_num=size;}
	//大图切换
	$('.img li').eq(i_num-1).fadeIn('slow').siblings('li').fadeOut('slow');
	//小图切换
	$('.banner .num li').eq(i_num-1).addClass('on').siblings('li').removeClass('on');
	i_num--;
	});
	
	//左边按钮移动到其上时更换背景图片
	$('.prev').mouseover(function(){
		$('.prev').addClass('prev1');
	});
	//左边按钮移动到其上时还原背景图片
	$('.prev').mouseout(function(){
		$('.prev').removeClass('prev1');
	});
	//右边箭头点击时切换
	$('.next').click(function(){
		move_banner()
	});
	//右边按钮移动到其上时更换背景图片
	$('.next').mouseover(function(){
		$('.next').addClass('next1');
	});
	
	//右边按钮移动到其上时更换背景图片
	$('.next').mouseout(function(){
		$('.next').removeClass('next1');
	});
	//鼠标移动到幻灯片上时 显示左右切换案例
	$('.banner').mouseover(function(){
		$('.prev').show();
		$('.next').show();
	});
	//鼠标离开幻灯片上时 隐藏左右切换案例
	$('.banner').mouseout(function(){
		$('.prev').hide();
		$('.next').hide();
	});
	
	//自动播放函数
	function bannerMoveks(){
		timer_banner=setInterval(function(){
		move_banner()
		},2000);
	};
	bannerMoveks();//开始自动播放
	
	//鼠标移动到banner上时停止播放
	$('.banner').mouseover(function(){
		clearInterval(timer_banner);
	});
	
	//鼠标离开 banner 开启定时播放
	$('.banner').mouseout(function(){
		bannerMoveks();
	});
	
	//banner 右边点击执行函数
	function move_banner(){
		if(i_num==size-1){
			i_num=-1;
		}
		//大图切换
		$('.img li').eq(i_num+1).fadeIn('slow').siblings('li').fadeOut('slow');
		//小图切换
		$('.num li').eq(i_num+1).addClass('on').siblings('li').removeClass('on');
		i_num++;
	}

	$(".domainTab .hdTit li:last-child").css("marginRight","0px");
	$(".bd_item li:last-child").css("marginRight","0px");
	$(".flowList li:last-child").css("marginRight","0px");
	$(".public_domain tr:last-child td").css("borderBottom","none");
	$(".unit:last-child").css("marginRight","0px");
	$(".footerCont dl.footer_item:last-child").css("marginRight","0px");
	
	//首页域名分类列表显示阴影框
	$(".bd_item li").each(function() {
		$(this).hover(function(){
			$(this).addClass("boxShadow");
		},function(){
			$(this).removeClass("boxShadow");
			});
	});
	
	//去掉最后一个边框
	$(".s-type:last-child").css("borderBottom","none");
});