Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
});

var ADMIN_EMAIL = ["abzal.serekov@gmail.com"];

Router.route('/', {
	name: 'admin',
	// waitOn: function () {
	// 	if (Meteor.user() && ADMIN_EMAIL.indexOf(Meteor.user().emails[0].address) >= 0) 
	// 		return Meteor.subscribe('subscribers');
	// 	return null;
	// }
});


Router.route('/home', {
	name: 'home',
});

Router.route('/blog', {
	name: 'blog',
})