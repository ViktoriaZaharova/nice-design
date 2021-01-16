$('.case-slider').slick({
    slidesToShow: 6,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    autoplay: true,
});

$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});