Template.admin.helpers({
	posts: function () {
		return Posts.find({}, {sort: {added: -1}});
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
    },
	title_usti: function () {
		return Home.findOne({place: 'title_usti'}).value;
	},
	title_asti: function () {
		return Home.findOne({place: 'title_asti'}).value;
	},
	quote_1: function () {
		return Home.findOne({place: 'quote_1'}).value;
	},
	quote_2: function () {
		return Home.findOne({place: 'quote_2'}).value;
	},
	quote_3: function () {
		return Home.findOne({place: 'quote_3'}).value;
	},
	about_us: function () {
		return Home.findOne({place: 'about_us'}).value;
	},

});

Template.admin.rendered = function () {
	$("body").removeClass("custom-body").removeClass("blog-post-body");
	$("footer").removeClass("footer-not-main").removeClass("blog-post-footer").addClass("footer-wrapper");

	$("#title_usti").val(Home.findOne({place: 'title_usti'}).value);
	$("#title_asti").val(Home.findOne({place: 'title_asti'}).value);
	$("#quote_1").val(Home.findOne({place: 'quote_1'}).value);
	$("#quote_2").val(Home.findOne({place: 'quote_2'}).value);
	$("#quote_3").val(Home.findOne({place: 'quote_3'}).value);
	$("#about_us").val(Home.findOne({place: 'about_us'}).value);

};

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
			$("#status").text("Жуктелуде...");
			current_image = Images.insert(file, function (err, fileObj) {
				$("#status").text("");
				if (Session.get(Meteor.userId()) && Session.get(Meteor.userId()) === "yeah") {
					var cnt = parseInt(Session.get("photos_count"));
					cnt++;
					Session.set("photo" + cnt, "/cfs/files/images/" + fileObj._id);
					Session.set("photos_count", cnt);
					console.log(cnt);
				} else {
					Session.set(Meteor.userId(), "yeah");
					Session.set("photos_count", 1);
					Session.set("photo" + 1, "/cfs/files/images/" + fileObj._id);
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
				url.push(file_info); 
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

			location.reload();

		}
   	},
   	'click #more-img': function (e) {
   		e.preventDefault();
   		$("#photkalar").append("<input name='photo_src' type='file' class='myFileInput'>");
   	},
	'change .myFileInput-gallery': function(event, template) {
		var fileObj_id = "";
		FS.Utility.eachFile(event, function (file) {
			current_image = Images.insert(file, function (err, fileObj) {
				if (Session.get(Meteor.userId() + "gallery") && Session.get(Meteor.userId() + "gallery") === "yeah-gallery") {
					var cnt = parseInt(Session.get("photos_count-gallery"));
					cnt++;
					Session.set("photo-gallery" + cnt, "/cfs/files/images/" + fileObj._id);
					Session.set("photos_count-gallery", cnt);
					console.log(cnt);
					fileObj_id = fileObj._id;
				} else {
					Session.set(Meteor.userId() + "gallery", "yeah-gallery");
					Session.set("photos_count-gallery", 1);
					Session.set("photo-gallery" + 1, "/cfs/files/images/" + fileObj._id);
					fileObj_id = fileObj._id;
				}
				$("#status-gallery").text("Жуктелуде...");
			});
			$("#status-gallery").text("");

		});

   	},
   	'click #save-gallery': function () {
   		var url = [];
   		var count = Session.get("photos_count-gallery");
   		console.log(count);
   		if ((Session.get(Meteor.userId() + "gallery") && Session.get(Meteor.userId() + "gallery") === "yeah-gallery") && count) {
   			for (var i = 1; i <= count; i++) {
				var file_info = Session.get("photo-gallery" + i);
				url.push(file_info); 
   			}
   		}
		Gallery.insert({
			added: new Date(),
			imgs: url,
		});
		Session.set(Meteor.userId()+"gallery", "nope");
		Session.set("photos_count-gallery", 0);
		console.log(url);
		location.reload();
	},
   	'click #more-img-gallery': function (e) {
   		e.preventDefault();
   		$("#photkalar-gallery").append("<input name='photo_src' type='file' class='myFileInput-gallery'>");
   	},
   	'click .remove': function (e) {
   		e.preventDefault();
   		var $this = $(e.currentTarget);
   		var _id = $this.attr('id');
   		console.log($this);
   		console.log(_id);
   		Posts.remove({_id: _id});
   	},
   	'click #save_title_usti': function () {
		var title_usti = Home.findOne({place: 'title_usti'})._id;
   		$("#saktaldy_title_usti").text("Сакталды!");
   		Meteor.setTimeout(function () {
	   		$("#saktaldy_title_usti").text("");
   		}, 3000);
   		return Home.update({_id: title_usti}, {$set: {value: $("#title_usti").val()}});
   	}, 
   	'click #save_title_asti': function () {
		var title_asti = Home.findOne({place: 'title_asti'})._id;
   		$("#saktaldy_title_asti").text("Сакталды!");
   		Meteor.setTimeout(function () {
	   		$("#saktaldy_title_asti").text("");
   		}, 3000);
   		return Home.update({_id: title_asti}, {$set: {value: $("#title_asti").val()}});
   	}, 
   	'click #save_about_us': function () {
		var about_us = Home.findOne({place: 'about_us'})._id;
   		$("#saktaldy_about_us").text("Сакталды!");
   		Meteor.setTimeout(function () {
	   		$("#saktaldy_about_us").text("");
   		}, 3000);
   		return Home.update({_id: about_us}, {$set: {value: $("#about_us").val()}});
   	}, 
   	'click #save_quote_1': function () {
		var quote_1 = Home.findOne({place: 'quote_1'})._id;
   		$("#saktaldy_quote_1").text("Сакталды!");
   		Meteor.setTimeout(function () {
	   		$("#saktaldy_quote_1").text("");
   		}, 3000);
   		return Home.update({_id: quote_1}, {$set: {value: $("#quote_1").val()}});
   	}, 
   	'click #save_quote_2': function () {
		var quote_2 = Home.findOne({place: 'quote_2'})._id;
   		$("#saktaldy_quote_2").text("Сакталды!");
   		Meteor.setTimeout(function () {
	   		$("#saktaldy_quote_2").text("");
   		}, 3000);
   		return Home.update({_id: quote_2}, {$set: {value: $("#quote_2").val()}});
   	}, 
   	'click #save_quote_3': function () {
		var quote_3 = Home.findOne({place: 'quote_3'})._id;
   		$("#saktaldy_quote_3").text("Сакталды!");
   		Meteor.setTimeout(function () {
	   		$("#saktaldy_quote_3").text("");
   		}, 3000);
   		return Home.update({_id: quote_3}, {$set: {value: $("#quote_3").val()}});
   	}, 
});