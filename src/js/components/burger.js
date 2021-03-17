const burger = $('.header__burger');
const menu = $('.header__menu');

burger.on('click', function (e) {

	e.preventDefault();
	burger.toggleClass('header__burger--close');
	menu.toggleClass('header__menu--open');

	$(document).keyup(function(e) {
		if (e.key === "Escape" || e.keyCode === 27) {
			$('.header__menu').removeClass('header__menu--open');
			burger.removeClass('header__burger--close');
		}
	});
});