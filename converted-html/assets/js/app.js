function smoothScroll(el, to, duration) {
    if (duration < 0) {
        return;
    }
    var difference = to - $(window).scrollTop();
    var perTick = difference / duration * 10;
    this.scrollToTimerCache = setTimeout(function() {
        if (!isNaN(parseInt(perTick, 10))) {
            window.scrollTo(0, $(window).scrollTop() + perTick);
            smoothScroll(el, to, duration - 10);
        }
    }.bind(this), 10);
}

$(function() {

	$(".navigate-down").click(function(e) {

		$(this).addClass("hidden");
		$(".navigate-down-bg").addClass("hidden");
		$("#logo-small").addClass("visible");

		e.preventDefault();
		smoothScroll($(window), $("#project-details").offset().top, 400);
	});

	$( window ).scroll(function() {

		if ($(window).scrollTop() == 0)
		{
			// $(".navigate-down").removeClass("hidden");
			// $(".navigate-down-bg").removeClass("hidden");
			// $("#logo-small").removeClass("visible");
		}
		else
		{
			if ($(".navigate-down").hasClass("hidden") == false)
			{
				$(".navigate-down").addClass("hidden");
				$(".navigate-down-bg").addClass("hidden");
				$("#logo-small").addClass("visible");
			}
		}
	});

	if ($('#recent-shots-1').length)
	{

		$.getJSON('//api.dribbble.com/players/rickwaalders/shots?page=0&per_page=9&callback=?', function(remoteData){
			
			if (remoteData && remoteData.shots.length)
			{
				for(var i = 0;i < remoteData.shots.length;i++)
				{
					var shot = remoteData.shots[i];

					var html = '<div class="shot-container">
						<div class="shot">
						<a href="'+shot.url+'" target="_blank">
							<img src="'+shot.image_url+'" class="shot-image" border="0" />
							<div class="shot-info">'+shot.likes_count+' likes</div>
						</a>
						</div></div>';

					var containerId = "#recent-shots-"+(i+1);
					$(containerId).html(html);
				}
			}

		})
	}

});
