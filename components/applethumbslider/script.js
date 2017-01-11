$(document).ready(function()
{	
	var widthOfSlide = $('.slide').width();

	//Get total width of the slider
	function getTotalWidth(){
		var width = 0;
		var count = $('.slide').length;
		
		// Get width of slide and multiply it with the count 
		width = widthOfSlide * count;
		return width;
	}

	// Get marginLeft value
	function getMarginLeftVal(pos){
		// Calculate Margin left
		var ml = 0;
		if ( pos > 0 )
		{
		  ml = pos*widthOfSlide;
		}

		return ml;
	}

	// Set width to #slider
	var totalWidth = getTotalWidth();
	$('.slides').width(totalWidth);

	// Click event
	$('.thumb').on('click touch', function()
	{
		var pos = $(this).index();
		var marginleftValue = getMarginLeftVal(pos);
		$('.slides').animate({'marginLeft': '-'+marginleftValue+'px'}, 450);
	});
		
});			