var age, name, password;
var s = 1;
var i = 1;
var j = 1;
var num = 0;
function luB(){
	setInterval(function(){
		var l = getComputedStyle(lubott)["left"];
		var u = (parseInt(l) - 10);
		document.getElementById("lubott").style.left = u + "px";
		if(parseInt(getComputedStyle(lubott)["left"]) % parseInt(window.screen.width) == 0){
			var newo = new Image(1920, 1080);
			newo.src = "pic/" + num + ".webp";
			document.getElementById("lubott").appendChild(newo);
			var old = document.getElementById("lubott").firstElementChild;
			document.getElementById("lubott").removeChild(old);
			document.getElementById("lubott").style.left = 0 + "px";
			num++;
			if(num == 5){
				num = 0;
			}
		}
	}, 50);
}
function age(){
	age = window.prompt("请输入您的年龄：（18周岁以上用户方可进入）");
	if(age < 18){
		window.alert("对不起，由于您的年龄未满18周岁，不便浏览本网站，对您带来的不便深感抱歉");
		window.close();
	}
	else{
		window.alert("您已成功进入网站，请您尽早登录账号（首行右侧）");
		luB();
	}
}
function logIn(){
	document.getElementById("web").style.display = "none";
	document.getElementById("login").style.display = "block";
}
function onName(){
	document.getElementById("acountAlert").innerHTML="支持中文数字";
}
function blurName(){
	var tempOne = document.getElementById("account").value;
	if(tempOne == ""){
		document.getElementById("acountAlert").innerHTML="用户名不能为空";
	}
	else{
		document.getElementById("acountAlert").innerHTML="";
		name = tempOne;
	}
}
function onPassWord(){
	document.getElementById("passAlert").innerHTML="建议使用两种字符组合";
}
function blurPassWord(){
	var tempTwo = document.getElementById("pass").value;
	if(tempTwo == ""){
		document.getElementById("passAlert").innerHTML="密码不能为空";
	}
	else{
		document.getElementById("passAlert").innerHTML="";
		password = tempTwo;
	}
}
function sub(){
	document.getElementById("web").style.display = "block";
	document.getElementById("login").style.display = "none";
	document.getElementById("log").style.display = "none";
	document.getElementById("ac").style.display = "block";
	document.getElementById("na").innerHTML = "用户名：" + "<br/>" + name;
}
function shouTu(){
	i = 1;
	j = i;
	document.getElementById("lastT").style.display = "block";
	document.getElementById("firstb").style.borderBottom="2px solid #33c8f3";
	document.getElementById("lastY").style.display = "none";
	document.getElementById("secondb").style.borderBottom="0";
	document.getElementById("ft").src = "pic/1.webp";
}
function shouYin(){
	i = 5;
	j = i;
	document.getElementById("lastT").style.display = "none";
	document.getElementById("firstb").style.borderBottom="0";
	document.getElementById("lastY").style.display = "block";
	document.getElementById("secondb").style.borderBottom="2px solid #33c8f3";
	document.getElementById("fyf").src = "pic/5.webp";
}
function itDown(){
	if(i < 5){
		var a = document.getElementById("ft");
	}
	else{
		var a = document.getElementById("fyf");
	}
	if(j - i < 3){
		j++;
		a.src = 'pic/' + j + '.webp';
	}
	else{
		j = i;
		a.src = 'pic/' + j + '.webp';
	}
}
function itUp(){
	if(i < 5){
		var a = document.getElementById("ft");
	}
	else{
		var a = document.getElementById("fyf");
	}
	if(j - i != 0){
		j--;
		a.src = 'pic/' + j + '.webp';
	}
	else{
		j += 3;
		a.src = 'pic/' + j + '.webp';
	}
}