Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
});

var ADMIN_EMAIL = ["admin@altynurpak.kz"];

Router.route('/admin', {
	name: 'admin',
});


Router.route('/', {
	name: 'home',
});

Router.route('/blog/:_id', {
	name: 'blog',
	data: function () {
		var m_post = Posts.findOne(this.params._id);
		var description = "", body = m_post.body;
		for (var i = 0; i < Math.min(body.length, 150); i++) {
			if (body[i] == '<') {
				while (body[i] !== '>') {
					i++;
				}
				i++;
			}
			if (body[i] === "'")
				body[i] = '"';
			description += body[i];
		}		
		return _.extend(m_post, {
			description: description + "...",
		});
	},
});

Router.route('/all-blogs', {
	name: 'allblogs',
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

Router.route('/sabak-kestesi', {
	name: 'schedule',
});