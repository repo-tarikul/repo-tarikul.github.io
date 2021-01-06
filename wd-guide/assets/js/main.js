(function($){
    'use strict';

    $(document).ready(function(){


        // Dropdown on mouse hover
        $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });

        $('.navbar .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(400);
            }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(400)
        });


        // Search Form show and hide
        $('.open-search').click(function() {
            $('.search-overlay').slideDown(500);
        });

        $('.close-search').click(function() {
            $('.search-overlay').fadeOut(500);
        });


        // Tooltip Initialization
        $('[data-toggle="tooltip"]').tooltip()

        // Popover Initialization
        $('[data-toggle="popover"]').popover()

    });

})(jQuery);

