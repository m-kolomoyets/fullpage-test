$(document).ready(function () {
  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    normalScrollElements: '.swiper, .info',
    scrollingSpeed: 1700
  });

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    slideToClickedSlide: true,
  });

  const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });

});