Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
});

var ADMIN_EMAIL = ["abzal.serekov@gmail.com"];

Router.route('/admin', {
	name: 'admin',
});


Router.route('/', {
	name: 'home',
});

Router.route('/blog/:_id', {
	name: 'blog',
	data: function () {
		return Posts.findOne(this.params._id);
	},
});

Router.route('/erekshelikterimiz', {
	name: 'uniqueness',
});

Router.route('/kyzmetterimiz', {
	name: 'services',
});

Router.route('/kun-tartibi', {
	name: 'timetable',
});