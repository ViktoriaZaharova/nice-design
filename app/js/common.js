$('.case-slider').slick({
    slidesToShow: 6,
    variableWidth: true,
    arrows: true,
    centerMode: true,
    autoplay: true,
    appendArrows: '.case-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">\n' +
        '<polygon points="20,20 30,10 40,0 20,0 0,20 20,40 40,40 30,30 "/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">\n' +
        '<polygon points="20,20 10,10 0,0 20,0 40,20 20,40 0,40 10,30 "/>\n' +
        '</svg>\n</button>'
});

$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});