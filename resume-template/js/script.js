
// Header script
function navToggle() {
    if($("#nav_collapse").css('display') === 'none') {
		$('.navbar').css('display', 'block');
		$('body').css('padding-top', '356px');
    } else {
		$('.navbar').css('display', 'none');
		$('body').css('padding-top', '80px');
	}
	
}

var nav_offset_top = 0;
function stickyHeader() {
	if ($('.header_area').length) {
		var strickyScrollPos = nav_offset_top;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.header_area').removeClass('fadeIn animated');
			$('.header_area').addClass('fadeInDown animated');
		}
		else if($(window).scrollTop() <= strickyScrollPos) {
			$('.header_area').removeClass('fadeInDown animated');
			$('.header_area').addClass('slideIn animated');
			
		}
	}
}
$(window).on('scroll', function () {	
	stickyHeader()
});

var offsetHeight = 356;
$('.header_area .header_container .header_nav ul li a[href^="#"]:not([href="#"])').on('click', function(event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top - (offsetHeight-1)
	}, 1500);
	event.preventDefault();
});
$('body').scrollspy({
	target: ".header_nav",
	offset: offsetHeight
});


function bodyScrollAnimation() {
	var scrollAnimate = $('body').data('scroll-animation');
	if (scrollAnimate === true) {
		new WOW({
			mobile: false
		}).init()
	}
}
bodyScrollAnimation();






function our_gallery(){
	if ( $('.portfolio_main').length ){
		// Activate isotope in container
		$(".portfolio_list").imagesLoaded( function() {
			$(".portfolio_list").isotope({
				itemSelector: ".col-md-4",
			}); 
		}); 
		// Add isotope click function
		$(".portfolio_menu ul li").on('click',function(){
			$(".portfolio_menu ul li").removeClass("active");
			$(this).addClass("active");

			var selector = $(this).attr("data-filter");
			$(".portfolio_list").isotope({
				filter: selector,
				animationOptions: {
					duration: 450,
					easing: "linear",
					queue: false,
				}
			});
			return false;
		});
	}
}
our_gallery();
