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

	$(this).addClass("hide");
	$("#logo-small").addClass("visible");

	e.preventDefault();
	smoothScroll($(window), $("#project-details").offset().top-40, 400);
});

$( window ).scroll(function() {

	if ($(window).scrollTop() == 0)
	{
		$(".navigate-down").removeClass("hide");
		$("#logo-small").removeClass("visible");
	}
	else
	{
		if ($(".navigate-down").hasClass("hide") == false)
		{
			$(".navigate-down").addClass("hide");
			$("#logo-small").addClass("visible");
		}
	}
});