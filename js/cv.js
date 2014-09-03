$(function(){

	$("li").click(function(){
		$(".content").css("display", "none");
		var idContent = "#" + $(this).attr("id") + "Content";
		$(idContent).css("display", "block");
	});
});