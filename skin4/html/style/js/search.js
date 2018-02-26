$(function() {
	input = $(".f-range-sure input");
	// 数字
	$(".number").on("keyup", function() {
		clearNoNum1(this);
	})
	
	$("#domian-pri").slider({
		animate : true,
		range : true,
		min : 1,
		max : 9,
		step : 1,
		values : [ 0, 9 ],
		stop : function(event, ui) {
			ui.values[0] > 8 ? $(input[0]).val("") : $(input[0]).val(values(ui.values[0]));
			ui.values[1] > 8 ? $(input[1]).val("") : $(input[1]).val(values(ui.values[1]));
			slideCon($(this), $(input[0]).val(), $(input[1]).val());
		}
	});
	
	$("#domian-len").slider({
		animate : true,
		range : true,
		min : 1,
		max : 9,
		step : 1,
		values : [ 1, 9 ],
		stop : function(event, ui) {
			ui.values[0] > 8 ? $(input[2]).val("") : $(input[2]).val(ui.values[0]);
			ui.values[1] > 8 ? $(input[3]).val("") : $(input[3]).val(ui.values[1]);
			slideCon($(this), $(input[2]).val(), $(input[3]).val());
		}
	});
	
	//单选按钮点击事件
	$(".f-label").on("click",function(){
		var $me = $(this);
		var $siblings = $me.siblings();
		$me.addClass("checked");
		$me.find("input[type=radio]").attr("checked","checked");
		$siblings.removeClass("checked");
		$siblings.find("input[type=radio]").removeAttr("checked");
	});
	$(".u-btn2").on("click",function(){
		 showLodingImg("", "55%");
	});
	
	
	//后缀
	var arr_hz=$("#m-hz span");
    $(arr_hz[0]).click(function(){
        var name=$(this).parent().parent().attr("name");
        $(arr_hz).removeClass("active");
        $(this).addClass("active");
		$(this).parent().find("input[name='hz']").attr('value','');
    });
    $(arr_hz.slice(1,arr_hz.length)).click(function(){
        $(arr_hz[0]).removeClass("active");
         var name=$(this).parent().parent().attr("name"),idx=$(this).attr("idx"),text=$(this).text(),tname=$(this).parent().prev().text();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            if($("#m-hz").find("span[class='active']").length==0){
		        $("#m-hz").find("span").eq(0).addClass("active");
		    };
        }else{
            $(this).addClass("active");
        }
		var str="";
		$(this).parent().find(".active").each(function(){
			str+=$(this).text()+',';
		})
		var str=str.substring(0,str.length-1);
		$(this).parent().find("input[name='hz']").attr('value',str);
    });
    
    
	//域名类型
	var arr_style=$("#m-style span"),odiv=$("#data_style div"),_spans=$("#data_style span");
    $(arr_style[0]).click(function(){
        $(arr_style).removeClass("active");
        $(_spans).removeClass("z-cell");
        $(this).addClass("active");
        $(odiv).css("display", "none");
    });
    $(arr_style.slice(1,arr_style.length)).click(function(){
        var index = $(this).index();
        $(_spans).removeClass("z-cell");
        $(arr_style).removeClass("z-cell").removeClass("active");
        if($(this).hasClass("active")){
            return;
        }else{
            $(this).addClass("active");
        }
        $(odiv).css("display","none");
        $(odiv[index - 1]).css("display", "block").find("span").eq(0).addClass("z-cell");
    });
    
    $(_spans).click(function(){
        var tag=$(this).attr("tag");
        if(tag==undefined){
            $(this).parent().find("span").eq(0).removeClass("z-cell");
            if($(this).hasClass("z-cell")){
                $(this).removeClass("z-cell");
                checkstatus($(this).parent());
            }else{
                $(this).addClass("z-cell");
            }
        }else{
            $(_spans).removeClass("z-cell");
            $(this).addClass("z-cell");
	        }
 
	    });

	    var category_style=$("#m-productCategory span");
	   
	   //商标分类 
	    $(category_style[0]).click(function(){
	        $(category_style).removeClass("active");
	        $(this).addClass("active");
	    });
	    $(category_style.slice(1,category_style.length)).click(function(){
	        var index = $(this).index();
	        $(this).parent().find("span").eq(0).removeClass("active");
	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            if($("#m-productCategory").find("span[class='active']").length==0){
			        $("#m-productCategory").find("span").eq(0).addClass("active");
			    };
	        }else{
	            $(this).addClass("active");
	        }
	    });
	    
	    //更多，收起
		$("#categoryMore").on("click", function() {
		    var $me = $(this);
		    if ($me.hasClass("isShow")) {
		    
				$me.removeClass("isShow");
				$me.html("更多<i class='more'></i>");
				for ( var int = 0; int < $("#m-productCategory").find("span").length; int++) {
					var i=24;
					$("#m-productCategory").find("span").eq(i+int).css("display","none");
				}
		    } else {
				$me.addClass("isShow");
				$me.html("收起<i class='more'></i>");
				for ( var int = 0; int < $("#m-productCategory").find("span").length; int++) {
					var i=24;
					$("#m-productCategory").find("span").eq(i+int).css("display","inline-block");
				}
		    }
		});
})
// --------------------------------------------
var input = $(".f-range-sure input");

// 滑块的条件
function slideCon(obj, val, val1) {
	var str = $(obj).next().find("li").eq(8).text();
	val = val == "" ? val = $(obj).next().find("li").eq(0).text() : val;
	val1 = val1 == "" ? val1 = str : val1;
	var str2 = $(obj).attr("name"), name = $(obj).parent(0).parent(0).prev().text();
}
// 转换
function values(str) {
	switch (str) {
	case 1:
		str = 0;
		break;
	case 2:
		str = 500;
		break;
	case 3:
		str = 1000;
		break;
	case 4:
		str = 20000;
		break;
	case 5:
		str = 50000;
		break;
	case 6:
		str = 100000;
		break;
	case 7:
		str = 200000;
		break;
	case 8:
		str = 500000;
		break;
	}
	return str;
}
function convertValues(str) {
	var tostr="";
	switch (str) {
	case '0':
		tostr = 1;
		break;
	case '500':
		tostr = 2;
		break;
	case '1000':
		tostr = 3;
		break;
	case '20000':
		tostr = 4;
		break;
	case '50000':
		tostr = 5;
		break;
	case '100000':
		tostr = 6;
		break;
	case '200000':
		tostr = 7;
		break;
	case '500000':
		tostr = 8;
		break;
	}
	return tostr;
}
//检查状态
function checkstatus(){
    if($(arguments[0]).find("span[class='z-cell']").length==0){
        $(arguments[0]).find("span").eq(0).addClass("z-cell");
    };
}

//只允许输入[数字]
function clearNoNum1(obj) {
    //先把非数字的都替换掉
    obj.value = obj.value.replace(/[^\d]/g, "");
    //必须保证第一个为数字而不是0
    obj.value = obj.value.replace(/^[0]/g, "");
}
