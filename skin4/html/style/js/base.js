// JavaScript Document

$(function(){
	//头部公告滚动
	var speed=110;	//定义一个文字滚动速度的变量
	var demo=document.getElementById("topScroll");
	var demo1=document.getElementById("marquee1");
	var demo2=document.getElementById("marquee2");
	demo2.innerHTML=demo1.innerHTML
	function Marquee(){
		if(demo2.offsetTop-demo.scrollTop<=0)
			demo.scrollTop-=demo1.offsetHeight
		else{
			demo.scrollTop++
			}
		}
	var MyMar=setInterval(Marquee,speed)
	demo.onmouseover=function() {clearInterval(MyMar)}
	demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
	
	//点击关键字弹出下拉菜单
	$(".search_tym").click(function(event){
		$(".search_drop").css("display") == "none" ? $(".search_drop").css("display", "block") : $(".search_drop").css("display", "none");
	 	event.stopPropagation();
	});
	
	//点击切换关键字
	$(".tym_txt").click(function(){
		$(this).parent().parent().find(".search_tym").html($(this).text());
		if($(this).attr("ym")=="a"){
			$("#search1").show();
			$("#search2").hide();
			}
		else{
			$("#search2").show();
			$("#search1").hide();
			}
		$(".search_tym").attr("ym", $(this).attr("ym"));
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
	$(".banner .prev").click(function(){
	if(i_num==0){i_num=size;}
	//大图切换
	$('.img li').eq(i_num-1).fadeIn('slow').siblings('li').fadeOut('slow');
	//小图切换
	$('.banner .num li').eq(i_num-1).addClass('on').siblings('li').removeClass('on');
	i_num--;
	});
	
	//左边按钮移动到其上时更换背景图片
	$('.banner .prev').mouseover(function(){
		$('.banner .prev').addClass('prev1');
	});
	//左边按钮移动到其上时还原背景图片
	$('.banner .prev').mouseout(function(){
		$('.banner .prev').removeClass('prev1');
	});
	//右边箭头点击时切换
	$('.banner .next').click(function(){
		move_banner()
	});
	//右边按钮移动到其上时更换背景图片
	$('.banner .next').mouseover(function(){
		$('.banner .next').addClass('next1');
	});
	
	//右边按钮移动到其上时更换背景图片
	$('.banner .next').mouseout(function(){
		$('.banner .next').removeClass('next1');
	});
	//鼠标移动到幻灯片上时 显示左右切换案例
	$('.banner').mouseover(function(){
		$('.banner .arrowBtn').show();
	});
	//鼠标离开幻灯片上时 隐藏左右切换案例
	$('.banner').mouseout(function(){
		$('.banner .arrowBtn').hide();
	});
	
	//鼠标移动到幻灯片上时 显示左右切换案例
	$('.jpym').mouseover(function(){
		$('.jpym .tipBtn').show();
	});
	$('.ykj').mouseover(function(){
		$('.ykj .tipBtn').show();
	});
	$('.yjym').mouseover(function(){
		$('.yjym .tipBtn').show();
	});
	//鼠标离开幻灯片上时 隐藏左右切换案例
	$('.jpym').mouseout(function(){
		$('.jpym .tipBtn').hide();
	});
	$('.ykj').mouseout(function(){
		$('.ykj .tipBtn').hide();
	});
	$('.yjym').mouseout(function(){
		$('.yjym .tipBtn').hide();
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
	
	//新闻资讯图片文字轮播
	jQuery(".newsInfo").slide({
		titCell:".newsCont .num",
		mainCell:".newsCont .newsList",
		autoPage:true,effect:"left",
		autoPlay:true,
		pnLoop:false,
		trigger:"click"
	});
	
	//域名列表去掉最后一个下边框
	$(".r_list li:last").css("borderBottom","none");
	$(".bd_cont li:gt(3)").siblings("li").addClass("bt_b");
	
	//微信二维码弹出框
	
	$('.w_icon').click(function(){
		top.dialog({
			width: 230,
			title:'二维码扫描',
			content:'<div style="text-align:center;"><img src="http://img.chaicp.com/jumi/user/1/2016981629227793.png" style="width:200px;height:200px;"><p class="care">扫二维码加我</p></div>',
			ok: function () {}
			}).showModal();
			
	})
});