$(document).ready(function()
{
	$("li.Q").click(function()
	{

		$(this).next().slideToggle(500)
		.siblings("li.answer").slideUp();

		var image=$(this).children("img");
		
		image.addClass("rotate");
		$("img").not(image).removeClass("rotate");
		


	});

	
});

