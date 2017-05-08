var thanksApp = {};

thanksApp.animationProcess = function(){
	$(".mainAnimation").delay(1500).fadeOut();
	$(".thankyou").delay(2000).fadeIn();
}

thanksApp.init = function(){
	thanksApp.animationProcess();
}

$(function(){
	thanksApp.init();
});