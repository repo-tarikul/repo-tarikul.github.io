(function($){
    "use strict";

    $(document).ready(function(){

        // Dropdown on hover
        function toggleNavbarMethod() {
            if ($(window).width() > 991) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);


        // Header Slider
        $('.header-slider').slick({
            autoplay: true,
            dots: true,
            speed: 1000,
            autoplaySpeed: 4000,
        });


        // Header Image Slider
        $('.header-image-slider').slick({
            autoplay: true,
            dots: false,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 1000,
            autoplaySpeed: 6000,
            responsive: [
                {
                    breakpoint: 991.98,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });


        // Product Slider
        $('.product-slider-4').slick({
            autoplay: true,
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            useCss: true,
            responsive: [
                {
                    breakpoint: 1199.98,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991.98,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575.98,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });

        // Product Slider 3 Column
        $('.product-slider-3').slick({
            autoplay: true,
            infinite: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            useCss: true,
            responsive: [
                {
                    breakpoint: 1199.98,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 991.98,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575.98,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });


        // Brand Slider
        $('.brand-slider').slick({
            speed: 4000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 7,
            slidesToScroll: 1,
            useCss: true,
            infinite: true,
            swipeToSlide: true,
            centerMode: true,
            focusOnSelect: false,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1199.98,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991.98,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575.98,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });





        // Product Detail Slider
        $('.product-slider-single').slick({
            infinite: true,
            autoplay: true,
            dots: false,
            fade: true,
            useCss: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.product-slider-single-nav'
        });
        $('.product-slider-single-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            useCss: true,
            centerMode: true,
            focusOnSelect: true,
            asNavFor: '.product-slider-single'
        });




        // Quantity Plus Minus
        $('.qty button').on('click', function () {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('quantity-plus')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });



        // Shipping info show hide
        $(":checkbox").prop('checked', false).parent().removeClass('active');
        $('.checkout-page #shipto').change(function () {
            if($(this).is(':checked')) {
                $('.checkout-page .shipping-info-content').slideUp();
            } else {
                $('.checkout-page .shipping-info-content').slideDown();
            }
        });

        
        
        
        // Payment methods show hide
        $(":radio").prop('checked', false).parent().removeClass('active');
        $('.checkout-page .payment-method .custom-control-input').change(function () {
            if ($(this).prop('checked')) {
                var checkbox_id = $(this).attr('id');
                $('.checkout-page .payment-method .payment-content').slideUp();
                $('#' + checkbox_id + '-show').slideDown();
            }
        });




    });

})(jQuery);