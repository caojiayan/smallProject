window.onload=function(){
	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	
	//当音乐播放停止的时候，自动停止光盘旋转
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);
	
	//点击音乐图标，控制播放
	music.onclick=function(){
		if (audio.pause) {
			audio.play();
			this.setAttribute("class","play");
		} else{
			audio.pause();
			this.setAttribute("class"," ");
		}
	}
	
	//点击屏幕开启好运2017
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
	},false);
}
