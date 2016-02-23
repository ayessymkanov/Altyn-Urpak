Template.blog.rendered = function () {
	$("body").removeClass("custom-body").addClass("blog-post-body");
	$("footer").addClass("footer-not-main");

};

Template.blog.helpers({
	title_usti: function () {
		return Home.findOne({place: 'title_usti'}).value;
	},
	title_asti: function () {
		return Home.findOne({place: 'title_asti'}).value;
	},
});