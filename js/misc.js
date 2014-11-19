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

	$(".more a").click(function(e){
		e.preventDefault();
		$(this).next(".report").toggle();
	});
	$(".down_arr a").click(function(e){
		e.preventDefault();
		$(this).parent().next(".comment_form").slideToggle();
		$(this).parent().toggleClass("up_arr");

	});

});