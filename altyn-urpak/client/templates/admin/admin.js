Template.admin.helpers({
	posts: function () {
		return Posts.find({}, {submitted: -1});
	},
	post: function () {
		return Posts.findOne({});
	}
});