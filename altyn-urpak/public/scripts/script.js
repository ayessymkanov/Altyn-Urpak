// var body = document.body,
//     html = document.documentElement;

// var height = Math.max( body.scrollHeight, body.offsetHeight, 
//                        html.clientHeight, html.scrollHeight, html.offsetHeight );

// console.log(height);

(function() {
	$(window).scroll(function() {

	var $sideNav = $('.side-navigation');

	var scroll = $(this).scrollTop();

	var vh = $(this).height();
	
	if(scroll > vh / 2) {
		$sideNav.addClass('seen');
	} else {
		$sideNav.removeClass('seen');
	}

	var $welcomeSection = $('.welcome-section').height(),
		$aboutSection = $('.about-section').height(),
		$blogSection = $('.blog-section').height(),
		$photoSection = $('.photo-section').height(),
		$contactsSection = $('.contacts-section').height();

	var $sideNavItem = $('.side-navigation__item');

	if(scroll > $welcomeSection / 2) {
		$sideNavItem.eq(0).addClass('active').siblings().removeClass('active');
		$sideNavItem.css({
			// "background-color": "#68238e",
			"color": "#fff"
		});
	} if(scroll > $aboutSection + $welcomeSection - 100) {
		$sideNavItem.eq(1).addClass('active').siblings().removeClass('active');
	} if(scroll >$blogSection + $aboutSection + $welcomeSection - 100) {
		$sideNavItem.eq(2).addClass('active').siblings().removeClass('active');
	} if(scroll > $photoSection + $blogSection + $aboutSection + $welcomeSection - 200) {
		$sideNavItem.eq(3).addClass('active').siblings().removeClass('active');
	}

});

})();

(function() {
	$('.menu-btn').on('click', function(e) {
		e.preventDefault();
		$('.mobile-navigation').toggleClass('is-open');
	});
})();

(function() {
	var $slides = $('ul.slides li');
	var $slidesNavItem = $('ul.slides-navigation li');

	var current = 1;
	var length = $slides.length;

	var interval = setInterval(function() {

		if($slides.eq(current).hasClass('active')) {
			current++;
		} else {
			$slides.eq(current).addClass('active').siblings().removeClass('active');
			$slidesNavItem.eq(current).addClass('active').siblings().removeClass('active');
			current++; 
		}

		if(current === length) {
			current = 0;
		}
	}, 5000);

	$slidesNavItem.on('click', function() {
		clearInterval(interval);
		current = $(this).index();

		$slides.eq(current).addClass('active').siblings().removeClass('active');
		$slidesNavItem.eq(current).addClass('active').siblings().removeClass('active');
	});

})();

(function() {
	console.log($('.about-section').height());
	console.log($('.blog-section').height());
})();

// function scrollToFunc(toSection) {
// 	$('html, body').animate({
// 		scrollTop: $("." + toSection).offset().top;
// 	}, 'slow');
// }

(function() {

	var $htmlBody = $('html, body');

	$('.about-link, .show-me').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.about-section').offset().top
		}, 'slow');
	});	

	$('.news-link').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.blog-section').offset().top
		}, 'slow');
	});

	$('.photos-link').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.photo-section').offset().top
		}, 'slow');
	});

	$('.contacts-link').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.contacts-section').offset().top
		}, 'slow');
	});

	$('.mobile-navigation').find('li').on('click', function() {
		$(this).closest('ul').removeClass('is-open');
	})();
})();
