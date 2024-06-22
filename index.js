$(document).ready(function () {
  $(".test__slide").slick({
    dots: false,
    infinite: false,
    slidesToShow: 4.5,
    arrows: true,
    // nextArrow: "<img class='next-arr' src='/imgs/icon-arrow.png'>",
    // prevArrow: "<img class='prev-arr' src='/imgs/icon-arrow.png'>",

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
