$(function () {

  $('.submenu__btn').on('click', function(){
    $('.submenu__list').toggleClass('active')
});

});



var swiper = new Swiper('.top-slider__box', {

  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.top-slider--next',
    prevEl: '.top-slider--prev',
  },
});


var swiper = new Swiper('.brands__slider', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 140,


});



var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);