$(function () {

  $(".filter__slider").ionRangeSlider({
    type: "double",
    onStart: function (data){
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
  });

  $('.select-style').styler();

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
  $('body').toggleClass('lock')
  $('.overlay').addClass('on')
});

$('.mob-nav__close').on('click', function(){
  $('.mob-nav').removeClass('active')
  $('body').toggleClass('lock')
  $('.overlay').removeClass('on')
});

$('.filter__btn--categories').on('click', function(){
  $('.filter__categories-list').toggleClass('filter__close')
});

$('.filter__btn--offer').on('click', function(){
  $('.filter__offer-list').toggleClass('filter__close')
});

$('.filter__btn--brands').on('click', function(){
  $('.filter__brands-list').toggleClass('filter__close')
});

$('.filter__btn--price').on('click', function(){
  $('.filter__price-form').toggleClass('filter__close')
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
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },

    560: {
      slidesPerView: 3,
      spaceBetween: 0
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 0
    },

    1300: {
      slidesPerView: 5,
      spaceBetween: 0
    },

    1600: {
      slidesPerView: 6,
      spaceBetween: 0
    },
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