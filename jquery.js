$(document).ready(function(){
	// This Document. ready function is required for jquery only
	$("#button").click(function(){
	$(".box1").slideUp(1000);
	$(".box2").fadeOut(1000);
	$(".box3").css("background-color", "blue");
	$(".box4").css("width", "200px");
	// $(".box3").();
	// $(".box4").();
});
});
