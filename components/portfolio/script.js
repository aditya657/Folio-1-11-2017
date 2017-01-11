$(document).ready(function()
{
	
	$(".slides").first().addClass("active");
	$(".slides").hide();

	$(".active").show();

	$("#container").mouseover(function()
	{
		$(".leftarrow").fadeIn(300);
		$(".rightarrow").fadeIn(300);
	});

	$("#container").mouseout(function()
	{
		$("#leftarrow").fadeOut();
		$("#rightarrow").fadeOut();
	});


	$('#rightarrow').click(function()
	{
		$(".active").removeClass('active').addClass("oldactive");

		if($(".oldactive").is(":last-child"))
		{
			$(".slides").first().addClass("active");
		}
		else
		{
			$(".oldactive").next().addClass("active");
		}

		$(".oldactive").removeClass("oldactive");
		$(".slides").fadeOut(500);
		$(".active").fadeIn(500);

	});

	$("#leftarrow").click(function()
	{
		$(".active").removeClass("active").addClass("oldactive");


		if($(".oldactive").is(":first-child"))
		{
			$(".slides").last().addClass("active");
		}
		else
		{
			$(".oldactive").prev().addClass("active");
		}
		$(".oldactive").removeClass("oldactive");
		$(".slides").fadeOut(500);
		$(".active").fadeIn(500);
	});

	$(".readmore").click(function()
	{
		$("#moretext").toggle(500);
	});

		
	
	$(".reveal").click(function()
	{
		$("#mobile").toggle();
	});



	
});
