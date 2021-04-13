var fixNav = 50;
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		if (scroll >= fixNav) {
			$('#sticky-bar').addClass('sticky-bar--active');
		} else {
			$('#sticky-bar').removeClass('sticky-bar--active');
		}
	});