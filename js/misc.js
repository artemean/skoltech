jQuery(function() {

	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		pager:false,
		pause: 5000  
	});
	
	$('[data-toggle="tooltip"]').tooltip();

	$(".faq dt span").click(function () {
		$(this).parent("dt").next("dd").slideToggle();
	});

});