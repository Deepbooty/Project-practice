window.onload=function(){
		var banner=document.getElementById('banner');
		var aBtn=banner.getElementsByTagName('ol')[0].getElementsByTagName('li');
		var oUl=banner.getElementsByTagName('ul')[0];
		var now=0;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				now=this.index;
				tab();
				
				};
			
			};
		
		
		
			function tab(){
		for(var i=0; i<aBtn.length;i++){
			aBtn[i].className="";
			}
			aBtn[now].className="active";
			startMove(oUl,{top:-390*now});
		}	
		
	function next(){
		now++;
		if(now==aBtn.length){
			now=0;
			}
			tab();
		}
		
		var timer=setInterval(next,1000);
		banner.onmouseover=function(){
			clearInterval(timer);
			};
		banner.onmouseout=function(){
			timer=setInterval(next,1000);
			};
		
		};
		
		//ÈôÒþÈôÏÖ
	