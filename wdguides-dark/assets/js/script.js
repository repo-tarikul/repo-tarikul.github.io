(function($){
    'use strict';

    // Tooltip and Popover Initialization

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    });


    
    $(document).ready(function(){


        /* Smooth Scroll */

        $('a.smooth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 800);
            e.preventDefault();
        });

        
        // Search Form show and hide

        $('.open-search').click(function() {
            $('#searchOverlay').slideDown(500);
        });

        $('.close-search').click(function() {
            $('#searchOverlay').fadeOut(500);
        });

        // Masonry Layout
        $('.all-category').masonry({
            itemSelector: '.category-item',
        });



        //Object fit initialization

        objectFitImages();


    });

    

})(jQuery);
    
