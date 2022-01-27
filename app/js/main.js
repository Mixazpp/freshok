$(function () {

  $('.submenu__btn').on('click', function(){
    $('.submenu__btn').toggleClass('submenu__btn--active')
    
});

});



var swiper = new Swiper('.top-slider__box', {

  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.top-slider__next',
    prevEl: '.top-slider__prev',
  },
});

var mixer = mixitup('.top-products__content');