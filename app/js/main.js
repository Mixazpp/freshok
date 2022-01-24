$(function () {

});



var swiper = new Swiper('.slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.slider__swiper-button-next',
    prevEl: '.slider__swiper-button-prev',
  },
});