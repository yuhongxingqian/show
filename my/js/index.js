window.onload = function() {
	eap_btns();
	btn_on();
}
var eap_btns = function() {
	var eap_btn1 = document.getElementsByClassName("eap_btn1")[0];
	var con1 = document.getElementsByClassName("con1");
	for(var i = 0; i < con1.length; i++) {
		var lis = document.createElement("li");
		lis.classList.add("btn_li");
		eap_btn1.appendChild(lis);
	}
	eap_btn1.getElementsByClassName("btn_li")[0].classList.add("act");
	var h = eap_btn1.offsetWidth;
	eap_btn1.style.marginLeft = -(h / 2) + "px";

	var eap_btn2 = document.getElementsByClassName("eap_btn2")[0];
	var con2 = document.getElementsByClassName("con2");
	for(var i = 0; i < con2.length; i++) {
		var lis = document.createElement("li");
		lis.classList.add("btn_li");
		eap_btn2.appendChild(lis);
	}
	eap_btn2.getElementsByClassName("btn_li")[0].classList.add("act");
	var h = eap_btn2.offsetWidth;
	eap_btn2.style.marginLeft = -(h / 2) + "px";
}
var btn_on = function() {
	var con1 = document.getElementsByClassName("con1");
	var btn_li1 = document.getElementsByClassName("eap_btn1")[0].getElementsByClassName("btn_li");
	for(var i = 0; i < con1.length; i++) {
		btn_li1[i].index = i;
		btn_li1[i].onclick = function() {
			for(var j = 0; j < con1.length; j++) {
				con1[j].style.display = "none";
				btn_li1[j].classList.remove("act")
			}
			con1[this.index].style.display = "block";
			btn_li1[this.index].classList.add("act");

		}
	}
	var con2 = document.getElementsByClassName("con2");
	var btn_li2 = document.getElementsByClassName("eap_btn2")[0].getElementsByClassName("btn_li");
	for(var i = 0; i < con2.length; i++) {
		btn_li2[i].index = i;
		btn_li2[i].onclick = function() {
			for(var j = 0; j < con2.length; j++) {
				con2[j].style.display = "none";
				btn_li2[j].classList.remove("act")
			}
			con2[this.index].style.display = "block";
			btn_li2[this.index].classList.add("act");

		}
	}
}