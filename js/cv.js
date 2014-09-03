$(function(){

	$("#divMenu li").click(function(){
		$("#divMenu li").removeClass("menuSelected");
		$(this).addClass("menuSelected");
		
		$(".content").css("display", "none");
		var idContent = "#" + $(this).attr("id") + "Content";
		$(idContent).css("display", "block");
	});
});