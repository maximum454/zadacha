$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header, .header__burger, .header__menu, .header__logo').toggleClass('active');
        $('body').toggleClass('lock');
        if($(this).hasClass('color')){
            $(this).removeClass('color');
        }

    })
});