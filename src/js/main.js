//= ../../node_modules/jquery-form-styler/dist/jquery.formstyler.min.js
//= ../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js
//= ../../node_modules/slick-carousel/slick/slick.min.js

$(function(){
	
	$('input, select').styler({
		onSelectOpened: function() {
			// к открытому селекту добавляется красная обводка
			// $(this).css('outline', '3px solid red');
		},
		locale: 'ru',
		locales: {
			'ru': {
				filePlaceholder: 'Перетащите сюда фотографии или',
				fileBrowse: 'выберите файлы',
				fileNumber: 'Выбрано: %s',
			}
		},
	});

	$('input[type="tel"]').mask("+7 (999) 999-9999");

	//= components/slider.js
	//= components/subscribe.js

});

