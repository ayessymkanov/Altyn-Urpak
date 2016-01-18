Template.allblogs.rendered = function () {
	$("body").removeClass("custom-body").removeClass("blog-post-body");
	$("footer").addClass("footer-not-main-1");
	$("title").text("Барлық блогтар | Алтын Ұрпақ балабақшасы");
}

Template.allblogs.helpers({
	janaliktar: function () {
		return Posts.find({category: 'Жаңалықтар'}, {sort: {added: -1}});
	},
	'ataanalar': function () {
		return Posts.find({category: 'Ата-аналар үшін'}, {sort: {added: -1}});
	},
	habarlandyru: function () {
		return Posts.find({category: 'Хабарландыру'}, {sort: {added: -1}});
	},
	paydaly: function () {
		return Posts.find({category: 'Пайдалы мәлімет'}, {sort: {added: -1}});
	},
});


Template.allblogs.events({
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

});