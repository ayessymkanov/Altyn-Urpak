Template.notFound.rendered = function () {
	$("body").addClass("custom-body").removeClass("blog-post-body");
	$("footer").addClass("footer-not-main");
	$("title").text("Error 404 | Алтын Ұрпақ балабақшасы");
	$("meta[name='description']").attr("content", "“Алтын ұрпақ Астана” мекемесі балабақша 2-6 жас аралығында балаларды қабылдайды. Егер сіз балаңыздың жайлы ортада жанына жақын жандардан заманауи білім мен ұлттық құндылықтар ұштастырылған тәлім-тәрбие алғанын қаласаңыз біздің балабақшамыз сіздің көңіліңізден шығады.");
}