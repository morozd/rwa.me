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

$(".navigate-down").click(function(e) {

	$(this).addClass("hidden");
	$(".navigate-down-bg").addClass("hidden");
	$("#logo-small").addClass("visible");

	e.preventDefault();
	smoothScroll($(window), $("#project-details").offset().top-20, 400);
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