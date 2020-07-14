@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/burger.js')
@@include('partials/jquery.knob.js')
@@include('partials/slick.js')

$(function(){
    $nav = $('.header');
    $upline = $('.upline');
    $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function(){
        if ($window.scrollTop() > $h) {
            $nav.addClass('fixed');
            $upline.addClass('active');
        } else {
            $nav.removeClass('fixed');
            $upline.removeClass('active');
        }
    });
});



$('.js-partners-slider').slick({
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow: $('.partners__prev'),
    nextArrow: $('.partners__next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});