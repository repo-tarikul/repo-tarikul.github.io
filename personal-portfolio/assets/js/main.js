(function($){
    "use strict";


    // Smooth scrolling using jQuery easing
    var offsetHeight = 79;
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: (target.offset().top - (offsetHeight-1))
            }, 1000, "easeInOutExpo");
            return false;
        }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#topNavbar',
        offset: offsetHeight
    });




    $(document).ready(function(){
        // Navbar Background change on scroll
        $(document).scroll(function () {
            if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80 ) {
                $("#topNavbar").addClass("scrolled");
            } else {
                $("#topNavbar").removeClass("scrolled");
            }
        });


        // Navbar Background change on toggler click
        $(".navbar-toggler").click(function(){
            $("#topNavbar").toggleClass('click-bg');
        });


        // Testimonial Slider
        $('.testimonial-slider').slick({
            autoplay: true,
            dots: true,
            arrows: false,
            speed: 1000,
            autoplaySpeed: 3000,
        });


    });

})(jQuery);