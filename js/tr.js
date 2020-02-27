




$(document).ready(function () {
    $('.slick-news').slick({
        arrows: true,
        slidesToShow: 3,
        prevArrow: $('.prev-sl'),
        nextArrow: $('.next-sl')


    });
});

// ----------------------------burger__menu------------------------------

// $(document).ready(function () {
//     $('.header__burger').click(function (event) {
//         $('.heder__burger,.nav').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

$(".main").isotope({
    // options
    itemSelector: ".main__item",
    layoutMode: "fitRows"
});

$(".nav .nav__link").click(function () {
    $(".nav .nav__link").removeClass(".active")
    $(this).addClass("active");

    let selector = $(this).attr("data-filter")
    $(".main").isotope({
        filter: selector
    });

    return false
});