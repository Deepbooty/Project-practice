
	
$(function(){
	
	//创建底下小图标并切换
	var i_num=0;//定义一个变量  用于循环
	var clone=$(".imgBox li").first().clone();//复制一张l
	var size=$(".imgBox li").length;  //定义一个size变量 获取这个img下的li的
	for(var j=0;j<size;j++){
		$(".imgNum").append("<a></a>");
		$(".imgNum a").first().addClass("active");  //给第一个li加样式
		$(".imgNum a").hover(function(){
			var i_num1=$(".imgNum a").index(this);// 当前的原点的索引值存储起
			$(this).addClass("active").siblings("a").removeClass("active");
			$(".imgBox li").eq(i_num1).fadeIn('slow').siblings("li").fadeOut('slow');
			i_num=i_num1;
		})
	}
	//左边箭头点击时切换
	$(".imgLeft").click(function(){
		if(i_num==0){
			i_num=size
		}
		//大图切换
		$('.imgBox li').eq(i_num-1).fadeIn('slow').siblings('li').fadeOut('slow');
		//小图切换
		$('.imgNum a').eq(i_num-1).addClass('active').siblings('li').removeClass('active');
		i_num--;
		});
		
	//左边按钮移动到其上时更换背景图片
    $('.imgLeft').mouseover(function(){
		
		$('.imgLeft').addClass('imgLeft1');
	});
	
	//左边按钮移动到其上时还原背景图片
	$('.imgLeft').mouseout(function(){
		
		$('.imgLeft').removeClass('imgLeft1');
	});
	
	//右边箭头点击时切换
	$('.imgRight').click(function(){
		move_banner()
		
	});
	
	//右边按钮移动到其上时更换背景图片
	$('.imgRight').mouseover(function(){
		
		$('.imgRight').addClass('imgRight1');
	});
	
	//右边按钮移动到其上时更换背景图片
	$('.imgRight').mouseout(function(){
		
		$('.imgRight').removeClass('imgRight1');
	});
	
	//鼠标移动到幻灯片上时 显示左右切换案例
	$('.banner_bar').mouseover(function(){
		$('.imgLeft').show();
		$('.imgRight').show();
	});
	//鼠标离开幻灯片上时 隐藏左右切换案例
	$('.banner_bar').mouseout(function(){
		$('.imgLeft').hide();
		$('.imgRight').hide();
	});
	
	//自动播放函数
	function bannerMoveks(){
		timer_banner=setInterval(function(){
			move_banner()
		},2000)
	};
	bannerMoveks();//开始自动播放

	//鼠标移动到banner上时停止播放
	$('.banner_bar').mouseover(function(){
		clearInterval(timer_banner);
	});

	//鼠标离开 banner 开启定时播放
	$('.banner_bar').mouseout(function(){
		bannerMoveks();
	});
	
	//banner 右边点击执行函数
   function move_banner(){
			if(i_num==size-1){
				i_num=-1
			}
			//大图切换
			$('.imgBox li').eq(i_num+1).fadeIn('slow')
									   .siblings('li').fadeOut('slow');
			//小图切换
			$('.imgNum a').eq(i_num+1).addClass('active')
					   .siblings('a').removeClass('active');

			i_num++
		
		}
	
	$(".shop_item").hover(function(){
		$(this).mouseover(function(){
			$(this).addClass("shop_item_on");
			}),$(this).mouseout(function(){
				$(this).removeClass("shop_item_on");
				});
		});

});
