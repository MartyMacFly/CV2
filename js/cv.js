var headerTitles = { "#homeContent":"Accueil",
 "#expContent":"Expérience",
 "#formaContent" : "Formation",
 "#compContent" : "Compétences",
 "#persoContent" : "Divers"};

$(function(){

	$("#divMenu li").click(function(){
		$("#divMenu li").removeClass("menuSelected");
		$(this).addClass("menuSelected");

		var idContent = "#" + $(this).attr("id") + "Content";
		$(".contentSelected").one('transitionend', function(e)
		{
			$(idContent).addClass("contentSelected");
			$('#titleContent').html(getHeader(idContent));
			//$(contentSelected).addClass("contentSelected");
		});
		$(".contentSelected").removeClass("contentSelected");
		
		/*$(idContent).one('transitionend', function(e)
		{
			
		});*/
	});
});

function getHeader(idContent)
{
	return headerTitles[idContent]
}