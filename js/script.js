$(window).resize(function() {
	if ($(window).width() < 990) {
		$('.itemMenu').removeClass('submenu');
	} else if ($(window).width() > 990) {
		$('.itemMenu').addClass('submenu');
	}
}).resize();	
$(document).ready(function(){
	
	//Main slider
	$("#main_slider").owlCarousel(
		{
		items: 1, 
		dots: true,
		loop: true,
		autoplay:true,
		smartSpeed:4000,
		autoplayTimeout:8000,  
	});

	//products sliders
	$(".owl-carousel ").owlCarousel(
		{ 
		margin: 30,
		nav: true,
		dots: false,
		loop: true,
		responsive:{
			0:{
				items:1
			 },
			768:{
				items:2
			 },
			1200:{
				items:4
			 }
			} 	   
		});
	
	//navtab
	$('#navTab_products a').click(function (e) {
		e.preventDefault()
			$(this).tab('show')
	})
});