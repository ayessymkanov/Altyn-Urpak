Template.admin.helpers({
	posts: function () {
		return Posts.find({}, {submitted: -1});
	},
	post: function () {
		return Posts;
	},
	categories: function () {
		return Categories.find();
	}
});