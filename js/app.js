$(document).ready(function () {

	// -------------------- header --------------------------
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 100) {
	// 		$('header').addClass('active');
	// 	}
	// 	else {
	// 		$('header').removeClass('active');
	// 	}
	// });

	// -------------------- burger --------------------------
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close'),
		body = document.querySelector('body');

	/*===== MENU SHOW =====*/
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu');
			body.classList.add('dis-scroll');
		})
	}

	/*===== MENU HIDDEN =====*/
	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			body.classList.remove('dis-scroll');
		})
	}

	/*=============== REMOVE MENU MOBILE ===============*/
	const navLink = document.querySelectorAll('.nav__link')

	const linkAction = () => {
		const navMenu = document.getElementById('nav-menu')
		navMenu.classList.remove('show-menu');
		body.classList.remove('dis-scroll');
	}
	navLink.forEach(n => n.addEventListener('click', linkAction));

	// --------------------- Tabs ---------------------------
	// var tab = $('#tabs .tabs-items > div');
	// tab.hide().filter(':first').show();
	// // Клики по вкладкам.
	// $('#tabs .tabs-nav a').click(function () {
	// 	tab.hide();
	// 	tab.filter(this.hash).show();
	// 	$('#tabs .tabs-nav a').removeClass('active');
	// 	$(this).addClass('active');
	// 	return false;
	// }).filter(':first').click();
	// // Клики по якорным ссылкам.
	// $('.tabs-target').click(function () {
	// 	$('#tabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	// });
	// // Отрытие вкладки из хеша URL
	// if (window.location.hash) {
	// 	$('#tabs-nav a[href=' + window.location.hash + ']').click();
	// 	window.scrollTo(0, $("#".window.location.hash).offset().top);
	// }

	// -------------------- Acordion -------------------------
	$('.accordion-list > .accordion > .accordion-content').hide();
	$('.accordion-list > .accordion').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").find(".accordion-content").slideUp();
		} else {
			$(".accordion-list > .accordion.active .accordion-content").slideUp();
			$(".accordion-list > .accordion.active").removeClass("active");
			$(this).addClass("active").find(".accordion-content").slideDown();
		}
		return false;
	});
	// -------------------- Acordion Footer -------------------------
	if (document.documentElement.clientWidth <= 768) {
		$('.footer-nav > .footer-nav__item > .footer-nav__list').hide();
		$('.footer-nav > .footer-nav__item').click(function () {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active").find(".footer-nav__list").slideUp();
			} else {
				$(".footer-nav > .footer-nav__item.active .footer-nav__list").slideUp();
				$(".footer-nav > .footer-nav__item.active").removeClass("active");
				$(this).addClass("active").find(".footer-nav__list").slideDown();
			}
			return false;
		});
	}

	// ----------------- onClick Dropdown -------------------
	/*1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун*/
	// const menuBtns = document.querySelectorAll('.cldpd-btn');
	// const drops = document.querySelectorAll('.cldpd-content');
	// menuBtns.forEach(el => {
	// 	el.addEventListener('click', (e) => {
	// 		let currentBtn = e.currentTarget;
	// 		let drop = currentBtn.closest('.cldpd').querySelector('.cldpd-content');
	// 		menuBtns.forEach(el => {
	// 			if (el !== currentBtn) {
	// 				el.classList.remove('cldpd-btn--active');
	// 			}
	// 		});
	// 		drops.forEach(el => {
	// 			if (el !== drop) {
	// 				el.classList.remove('cldpd-content--active');
	// 			}
	// 		});
	// 		drop.classList.toggle('cldpd-content--active');
	// 		currentBtn.classList.toggle('cldpd-btn--active');
	// 	});
	// });
	// document.addEventListener('click', (e) => {
	// 	if (!e.target.closest('.cldpd')) {
	// 		menuBtns.forEach(el => {
	// 			el.classList.remove('cldpd-btn--active');
	// 		});
	// 		drops.forEach(el => {
	// 			el.classList.remove('cldpd-content--active');
	// 		});
	// 	}
	// });
	
	//--------------- fancybox -----------

	// FANCYBOX REVIEWS
	// ====================
	$('[data-fancybox="reviews"]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		// selector: '.cert-item',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				NEXT: 'Вперёд',
				PREV: 'Назад',
				ZOOM: 'Увеличить',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"zoom",
			"fullScreen",
			"close"
		]
	});
	// $('[data-fancybox-gallery]').fancybox({
	// 	transitionEffect: 'fade',
	// 	animationEffect: false,
	// 	clickContent: false,
	// 	touch: true,
	// 	loop: true,
	// 	selector: '.gal-img',
	// 	backFocus: false,
	// 	lang: 'ru',
	// 	hideScrollbar: false,
	// 	i18n: {
	// 		ru: {
	// 			CLOSE: 'Закрыть',
	// 			NEXT: 'Вперёд',
	// 			PREV: 'Назад',
	// 			FULL_SCREEN: 'На весь экран',
	// 		}
	// 	},
	// 	buttons: [
	// 		"fullScreen",
	// 		"close"
	// 	]
	// });

	// $('[data-fancybox="gallery"]').fancybox({
	// 	Thumbs: false,
	// 	Toolbar: false,
	// 	Image: {
	// 		zoom: false,
	// 		click: false,
	// 		wheel: "slide",
	// 	},
	// 	backFocus: false,
	// 	lang: 'ru',
	// 	hideScrollbar: false,
	// 	i18n: {
	// 		ru: {
	// 			CLOSE: 'Закрыть',
	// 			NEXT: 'Вперёд',
	// 			PREV: 'Назад',
	// 			FULL_SCREEN: 'На весь экран',
	// 		}
	// 	},
	// 	buttons: [
	// 		"fullScreen",
	// 		"close"
	// 	]
	// });

	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();	

	// ----------------- SWIPER ----------------------
	var swiper = new Swiper(".reviewsSwiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 12
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
			}
		}
	});

	var swiper = new Swiper(".clientsSwiper", {
		slidesPerView: 2,
		spaceBetween: 10,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 16
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});

	// var swiper = new Swiper(".mySwiper", {
	// 	// Стрелки
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},


	// 	// Пагинация (точки)
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// },

	// 	// Пагинация (динамическая)
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	dynamicBullets: true,
	// 	// },

	// 	// Прогрессбар
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	type: "progressbar",
	// 	// },

	// 	// Пагинация цифрами
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	type: "fraction",
	// 	// },

	// 	// Пагинация цифрами (кастомная)
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	clickable: true,
	// 	// 	renderBullet: function (index, className) {
	// 	// 		return '<span class="' + className + '">' + (index + 1) + "</span>";
	// 	// 	},
	// 	// },

	// 	// Скроллбар
	// 	// scrollbar: {
	// 	// 	el: ".swiper-scrollbar",
	// 	// 	hide: true,
	// 	// },

	// 	// Вертикальный слайдер
	// 	// direction: "vertical",

	// 	// Отступ между слайдов
	// 	// spaceBetween: 30,

	// 	// Количество видимых слайдов
	// 	// slidesPerView: 3,

	// 	// Свободное количество слайдов. Можно использовать в паре с .swiper-slide {width: 80%;}
	// 	// slidesPerView: "auto",

	// 	// Центрирование слайда
	// 	// slidesPerView: 3,
	// 	// centeredSlides: true,

	// 	// Центрирование слайда с автоматическим отображением слайдов.
	// 	// slidesPerView: "auto",
	// 	// centeredSlides: true,

	// 	// cssMode (Вроде плавность пролистывания)
	// 	// cssMode: true,
	// 	// mousewheel: true,
	// 	// keyboard: true,

	// 	// Free Mode (Свободное пролистывание)
	// 	// slidesPerView: 3,
	// 	// spaceBetween: 20,
	// 	// freeMode: true,

	// 	// Grid
	// 	// slidesPerView: 3,
	// 	// grid: {
	// 	// 	rows: 2,
	// 	// },
	// 	// spaceBetween: 30,
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	clickable: true,
	// 	// },

	// 	// Бесконечное пролистывание
	// 	// loop: true,

	// 	// Эффект (один из нескольких)
	// 	// effect: "coverflow",

	// 	// Автоматичское пролистывание
	// 	// autoplay: {
	// 	// 	delay: 2500,
	// 	// 	disableOnInteraction: false,
	// 	// },

	// 	// Галерея

	// });
	// var swiper = new Swiper(".mySwiper1", {
	// 	spaceBetween: 10,
	// 	slidesPerView: 4,
	// 	freeMode: true,
	// 	watchSlidesProgress: true,
	// });
	// var swiper2 = new Swiper(".mySwiper2", {
	// 	spaceBetween: 10,
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},
	// 	thumbs: {
	// 		swiper: swiper,
	// 	},
	// });

	// Scroll-container
	var swiperScroll = new Swiper(".scroll-container", {
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		mousewheel: true,
	});

	// -------------------- Scroll -------------------------
	$(".scrolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();
		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),
			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 50;
		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});

	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});
	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	// const player = new Plyr('#player');

	// ------------- Show More ---------------------
	// $("article.style-desc").has("p:nth-child(1)").append('<div class="more"><span>Узнать больше</span><img src="img/icons/next.svg" alt=""></div>');
	// $("article.style-desc .more").click(function () {
	// 	var $this = $(this),
	// 		$cards = $(this).closest('.style-desc');
	// 	$cards.toggleClass('open');
	// 	$this.find('span').html($cards.hasClass('open') ? 'Свернуть' : 'Узнать больше')
	// });
});

// -------------------- SHOW SCROLL UP --------------------
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 700 ? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll')
};
window.addEventListener('scroll', scrollUp);