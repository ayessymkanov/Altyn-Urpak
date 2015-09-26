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

Template.admin.events({
	'change .myFileInput': function(event, template) {
		FS.Utility.eachFile(event, function (file) {
			current_image = Images.insert(file, function (err, fileObj) {});
			Tracker.nonreactive(function () {
				Session.set(Meteor.userId(), current_image);
			});
		});
   	},
});