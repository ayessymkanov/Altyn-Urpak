Template.schedule.rendered = function () {
	$("body").addClass("custom-body").removeClass("blog-post-body");
	$("footer").addClass("footer-not-main");
}

Template.schedule.events({
	'click .js-schedule-nav-item': function (e) {
		e.preventDefault();
		var $this = $(e.currentTarget);
		$this.addClass('active').siblings().removeClass('active');
		$("."+$this.data("table")).addClass("active").siblings("table").removeClass("active");

	}
});