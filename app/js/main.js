$(function () {

  $('.submenu__btn').on('click', function(){
    $('.submenu__list').toggleClass('active'),
    $('.submenu').toggleClass('submenu--active')
});

$('.mob-nav__cat').on('click', function(){
  $('.submenu__list').toggleClass('active')
});

$('.user-nav__search').on('click', function(){
  $('.form-search').toggleClass('form-search--active')
});

$('.header-mob__burger').on('click', function(){
  $('.mob-nav').addClass('active')
});

$('.mob-nav__close').on('click', function(){
  $('.mob-nav').removeClass('active')
});

});



var swiper = new Swiper('.top-slider__box', {

  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.top-slider__pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.top-slider__next',
    prevEl: '.top-slider__prev',
  },
});


var swiper = new Swiper('.brands__slider', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 140,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },

    560: {
      slidesPerView: 2,
      spaceBetween: 0
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 70
    },

    992: {
      slidesPerView: 5,
      spaceBetween: 100
    }
  }

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