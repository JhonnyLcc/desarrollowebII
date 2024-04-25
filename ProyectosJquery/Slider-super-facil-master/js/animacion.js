$(function(){
		$("#slider div:gt(0)").hide();
		setInterval(function(){
			$("#slider div:first-child").fadeOut(1500)
			.next("div").fadeIn(1500)
			.end().appendTo("#slider");
		},4000);
	})