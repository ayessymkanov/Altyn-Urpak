Template.negizgi.events({
	'click img' : function (e) {
		var $this = $(e.currentTarget);
		var $bodyOverlay = $('.body-overlay'),
			$imageViewer = $('.image-viewer');
		($bodyOverlay).add($imageViewer).fadeIn("fast", function() {
			$('.current-image').attr("src", $this.attr("src"));
		});
	},
	'click .close-btn': function () {
		$(".body-overlay").add('.image-viewer').fadeOut("fast");
	}
});