Template.home.rendered = function () {
	$("body").removeClass("custom-body").removeClass("blog-post-body");
	$("footer").removeClass("footer-not-main");

	$("title").text("Алтын Ұрпақ балабақшасы");
	$("meta[name='description']").attr("content", "“Алтын ұрпақ Астана” мекемесі балабақша 2-6 жас аралығында балаларды қабылдайды. Егер сіз балаңыздың жайлы ортада жанына жақын жандардан заманауи білім мен ұлттық құндылықтар ұштастырылған тәлім-тәрбие алғанын қаласаңыз біздің балабақшамыз сіздің көңіліңізден шығады.");


	$(window).scroll(function() {

	var $sideNav = $('.side-navigation');

	var scroll = $(this).scrollTop();

	var vh = $(this).height();
	
	if(scroll > vh / 3) {
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
		$sideNavItem.eq(1).addClass('active').siblings().removeClass('active');
		$sideNavItem.css({
			"border-color": "white"
		});
		$(".side-navigation__item.active").css({
			"background-color": "white"
		})
	} if(scroll > $aboutSection + $welcomeSection - 100) {
		$sideNavItem.eq(2).addClass('active').siblings().removeClass('active');
		$sideNavItem.css({
			"border-color": "#68238e"
		});
	} if(scroll >$blogSection + $aboutSection + $welcomeSection - 100) {
		$sideNavItem.eq(3).addClass('active').siblings().removeClass('active');
	} if(scroll > $photoSection + $blogSection + $aboutSection + $welcomeSection - 200) {
		$sideNavItem.eq(4).addClass('active').siblings().removeClass('active');
	}

});


	var $slides = $('ul.slides li');
	var $slidesNavItem = $('ul.slides-navigation li');

	var current = 1;
	var length = $slides.length;

	Meteor.setInterval(function() {

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
}

Template.home.events({
	'click .menu-btn' : function (e) {
		var $htmlBody = $('html, body');
		e.preventDefault();
		$('.mobile-navigation').toggleClass('is-open');		
	},
	'click .about-link': function (e) {
		var $htmlBody = $('html, body');
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.about-section').offset().top
		}, 'slow');
	},
	'click .show-me': function (e) {
		var $htmlBody = $('html, body');
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.about-section').offset().top
		}, 'slow');
	},
	'click .news-link': function (e) {
		var $htmlBody = $('html, body');
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.blog-section').offset().top
		}, 'slow');
	},
	'click .photos-link': function (e) {
		var $htmlBody = $('html, body');
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.photo-section').offset().top
		},'slow');
	},
	'click .contacts-link': function (e) {
		var $htmlBody = $('html, body');
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.contacts-section').offset().top
		}, 'slow');
	},
	'click .mobile-navigation > li': function () {
		$(this).closest('ul').removeClass('is-open');
	},
	'click .js-blog-section-nav__item': function (e) {
		e.preventDefault();
		var $entry = $('.entries-holder'), $this = $(e.currentTarget);
		$($this).addClass('active').siblings().removeClass('active');
		$entry.eq($($this).index()).addClass('active').siblings().removeClass('active');
	},
	'click .js-schedule-nav-item': function (e) {
		e.preventDefault();
		var $this = $(e.currentTarget);
		$this.addClass('active').siblings().removeClass('active');
		$("."+$this.data("table")).addClass("active").siblings("table").removeClass("active");

	},
	'click .home-link': function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $('.welcome-section').offset().top		
		}, 'slow');
	}
});

Template.home.helpers({
	janaliktar: function () {
		return Posts.find({category: 'Жаңалықтар'}, {sort: {added: -1}, limit: 5});
	},
	'ataanalar': function () {
		return Posts.find({category: 'Ата-аналар үшін'}, {sort: {added: -1}, limit: 5});
	},
	habarlandyru: function () {
		return Posts.find({category: 'Хабарландыру'}, {sort: {added: -1}, limit: 5});
	},
	paydaly: function () {
		return Posts.find({category: 'Пайдалы мәлімет'}, {sort: {added: -1}, limit: 5});
	},
	gallery: function () {
		return Gallery.find({});
	}
});
