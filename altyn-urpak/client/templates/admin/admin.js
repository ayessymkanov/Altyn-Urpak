Template.admin.helpers({
	posts: function () {
		return Posts.find({}, {submitted: -1});
	},
	post: function () {
		return Posts;
	},
	categories: function () {
		return Categories.find();
	},
	user_email: function () {
		if (Meteor.user())
			return Meteor.user().emails[0].address;
		return "";
	},
	equals: function(v1, v2) {
        return (v1 === v2);
    }
});


Template.admin.created = function () {
	// $("input:radio[name='category']").change(function () {
	// 	Tracker.nonreactive(function () {
	// 		Session.set("category", $(this).val());
	// 	});
	// });
	Session.set(Meteor.userId(), "");
	Session.set("photos_count", 0);

};

Template.admin.events({
	'change .myFileInput': function(event, template) {
		FS.Utility.eachFile(event, function (file) {
			current_image = Images.insert(file, function (err, fileObj) {});
			Tracker.nonreactive(function () {
				if (Session.get(Meteor.userId()) && Session.get(Meteor.userId()) === "yeah") {
					var cnt = parseInt(Session.get("photos_count"));
					cnt++;
					Session.set("photo" + cnt, current_image);
					Session.set("photos_count", cnt);
					console.log(cnt);
				} else {
					Session.set(Meteor.userId(), "yeah");
					Session.set("photos_count", 1);
					Session.set("photo" + 1, current_image);
				}
			});
		});
   	},
   	'click #save': function () {
   		var url = [];
   		var count = Session.get("photos_count");
   		console.log(count);
   		if ((Session.get(Meteor.userId()) && Session.get(Meteor.userId()) === "yeah") && count) {
   			for (var i = 1; i <= count; i++) {
				var file_info = Session.get("photo" + i);
				url.push(Images.findOne({_id: file_info._id}).url(download=true));   			
   			}
   		}
		var body = $("#body").val();
		var title = $("#title").val();
		var category = $("input:checked").val();

		console.log(title);
		console.log(category);

		if (!title || title == "" || !category || !Categories.find({name: category})) {
			alert("Атың және категориясын жазуыңызды сұраймыз!");

		} else {

			Posts.insert({
				title: title,
				body: body,
				category: category,
				added: new Date(),
				imgs: url,
			});
			Session.set(Meteor.userId(), "nope");
			Session.set("photos_count", 0);
			console.log(url);
		}
   	},
   	'click #more-img': function (e) {
   		e.preventDefault();
   		$("#photkalar").append("<input name='photo_src' type='file' class='myFileInput'>");
   	},
   	'click .remove': function (e) {
   		e.preventDefault();
   		var $this = $(e.currentTarget);
   		var _id = $this.attr('id');
   		console.log($this);
   		console.log(_id);
   		Posts.remove({_id: _id});
   	} 
});