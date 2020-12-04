(function($){
    "use strict";

    $(document).ready(function(){

        // Project Slider
        $('.project-slider').slick({
            autoplay: true,
            draggable: true,
            dots: false,
            infinity: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            autoplaySpeed: 3000,
        });

        // Service Slider
        $('.service-slider').slick({
            autoplay: true,
            draggable: true,
            dots: false,
            infinity: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 700,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });

    });


})(jQuery);