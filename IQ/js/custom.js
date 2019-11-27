$(document).ready(function(){
	$('.testimonial-slider').slick({
		arrows: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2
				}	
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1
				}
			}
		]
	})
})