$(function(){

	$("#divMenu li").click(function(){
		$("#divMenu li").removeClass("menuSelected");
		$(this).addClass("menuSelected");

		var idContent = "#" + $(this).attr("id") + "Content";
		$(".contentSelected").one('transitionend', function(e)
		{
			$(idContent).addClass("contentSelected");
			//$(contentSelected).addClass("contentSelected");
		});
		$(".contentSelected").removeClass("contentSelected");
		
		
		
		
		
		/*$(idContent).one('transitionend', function(e)
		{
			
		});*/
	});
});