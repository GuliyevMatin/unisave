(function($) {
	'use strict';
	$(".navbar-form").hide()
	// Preloader JS
	$(function() {
		$('body').addClass('loaded');
	});


	// Go To Top JS
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  100);
	});

	// navbar click show search 
	$(".navbar-search").click(function () {
		$(".navbar-form").fadeToggle("slow", "linear")
	})


	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText: ["<img src='./assets/img/public/slidernavleft.png'>","<img src='./assets/img/public/slidernavright.png'>"],
		responsive:{
			0:{
				items:1
			}
		}
	})

	$(".accordion-body img").on('click', function(){
		$(".accordion-collapse").removeClass("show")
		$(".accordion-collapse").addClass("hide")
	})

})(jQuery);
