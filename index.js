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
  $(".btn-mobile").click(function () {
    $(".btn-mobile").toggleClass("show");
    $("header").toggleClass("show");
    $(".bgr-mobile").toggleClass("show");
  });
  $(".bgr-mobile").click(function () {
    $(".btn-mobile").removeClass("show");
    $("header").removeClass("show");
    $(".bgr-mobile").removeClass("show");
  });
});
let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
if (width > 1024) {
  const sliders = document.querySelectorAll(".portfolio__list");
  let isDown = false;
  let startX;
  let scrollLeft;
  sliders.forEach((slider) => {
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".scroll-link");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector("header").offsetHeight,
        behavior: "smooth",
      });
    });
  });
});
