var selectedImgIndex;

Template.negizgi.rendered = function () {
};

Template.negizgi.events({
	'click .close-btn, .body-overlay': function () {
		$(".body-overlay").add('.image-viewer').fadeOut("fast");
		$(".current-image").attr("src","");
	},
	'click .photo-view': function (e) {
		var $this = $(e.currentTarget);
		selectedImgIndex = $this.index();
		var $bodyOverlay = $('.body-overlay'),
			$imageViewer = $('.image-viewer'),
			$currentImage = $('.current-image');;
		$bodyOverlay.add($imageViewer).fadeIn("fast", function() {
			$currentImage.attr("src", $this.attr("src"));
		});
	},
	'click .left-controller': function () {
		var $bodyOverlay = $('.body-overlay'),
			$imageViewer = $('.image-viewer'),
			$currentImage = $('.current-image'),
			$imgLength = $(".photos-wrapper--general .photo-view").length;
		$currentImage.attr("src", $('.photo-view').eq(selectedImgIndex - 1)[0].src);
		selectedImgIndex--;
		if(selectedImgIndex === 0) {
			selectedImgIndex = $imgLength - 1;
		}
	},
	'click .right-controller, .current-image': function () {
		var $bodyOverlay = $('.body-overlay'),
			$imageViewer = $('.image-viewer'),
			$currentImage = $('.current-image'),
			$imgLength = $(".photos-wrapper--general .photo-view").length;

		$currentImage.attr("src", $('.photo-view').eq(selectedImgIndex + 1)[0].src);
		selectedImgIndex++;
		if(selectedImgIndex === $imgLength - 1) {
			selectedImgIndex = 0;
		}
		
	}
});