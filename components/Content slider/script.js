$(document).ready(function()
{
	
	$(".slide").first().addClass("active");
	$(".slide").hide();

	$(".active").show();

	$("#container").mouseover(function()
	{
		$("#leftslide").fadeIn(300);
		$("#rightslide").fadeIn(300);
	});

	$("#container").mouseout(function()
	{
		$("#leftslide").fadeOut();
		$("#rightslide").fadeOut();
	});


	$('#rightslide').click(function()
	{
		$(".active").removeClass('active').addClass("oldactive");

		if($(".oldactive").is(":last-child"))
		{
			$(".slide").first().addClass("active");
		}
		else
		{
			$(".oldactive").next().addClass("active");
		}

		$(".oldactive").removeClass("oldactive");
		$(".slide").fadeOut(500);
		$(".active").fadeIn(500);

	});

	$("#leftslide").click(function()
	{
		$(".active").removeClass("active").addClass("oldactive");


		if($(".oldactive").is(":first-child"))
		{
			$(".slide").last().addClass("active");
		}
		else
		{
			$(".oldactive").prev().addClass("active");
		}
		$(".oldactive").removeClass("oldactive");
		$(".slide").fadeOut(500);
		$(".active").fadeIn(500);
	});


	
});
