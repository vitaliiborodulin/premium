$('.slider__list').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
		},
		{
			breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
		}
	]
});

$('.product__slider-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	lazyLoad: 'ondemand',
	infinite: false,
	asNavFor: '.product__slider-nav'
});

$('.product__slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.product__slider-main',
	arrows: false,
	// centerMode: true,
	infinite: false,
	focusOnSelect: true,
	lazyLoad: 'ondemand'
});