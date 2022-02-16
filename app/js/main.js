$(function () {

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });
 

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,
    Dots: true,
  
    closeButton: "top",

  });
  var swiper = new Swiper('.product-one__carousel', {

    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.product-one__next',
      prevEl: '.product-one__prev',
    },
  });


  $('.filter__btn-open').on('click', function () {
    $('.filter').addClass('filter--active');
    $('body').toggleClass('lock')
  $('.overlay').addClass('on')
  });
  $('.filter__btn-close').on('click', function () {
    $('.filter').removeClass('filter--active');
    $('body').toggleClass('lock')                                                     
  $('.overlay').removeClass('on')
  });


  $('.catalog-content__btn').on('click', function (){   
    $('.catalog-content__btn').removeClass('catalog-content__btn--active');
    $(this).addClass('catalog-content__btn--active');
  });

  $('.button-two').on('click', function () {
    $('.catalog-content__list').addClass('catalog-content__list--two');
  });
  $('.button-three').on('click', function () {
    $('.catalog-content__list').removeClass('catalog-content__list--two');
  });

  $(".star").rateYo({
    numStars: 1,
    normalFill: "#A0A0A0",
    ratedFill: "#FFB800",
    starWidth: "17px",
  });
  $(".product-one__star").rateYo({
    numStars: 5,
    normalFill: "#A0A0A0",
    ratedFill: "#FFB800",
    starWidth: "17px",
  });
  $(".reviews__star").rateYo({
    numStars: 5,
    normalFill: "#A0A0A0",
    ratedFill: "#FFB800",
    starWidth: "17px",
  });

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
  $('.product-one__num').styler();

  $('.submenu__btn').on('click', function(){
    $('.submenu__list').toggleClass('active'),
    $('.submenu').toggleClass('submenu--active')
});



$('.user-nav__search').on('click', function(){
  $('.form-search').toggleClass('form-search--active')
});

$('.header-mob__burger').on('click', function(){
  $('.mob-nav').addClass('active')
  $('body').toggleClass('lock')
  $('.overlay').addClass('on')
});

$('.mob-nav__close, .mob-nav a, .submenu__list a').on('click', function(){
  $('.mob-nav').removeClass('active')
  $('body').toggleClass('lock')
  $('.overlay').removeClass('on')
  $('.submenu__list').removeClass('active')
});

$('.filter__btn--categories').on('click', function(){
  $('.filter__categories-list').toggleClass('filter__close')
  $('.filter__btn--categories').toggleClass('btn__close')
});

$('.filter__btn--offer').on('click', function(){
  $('.filter__offer-list').toggleClass('filter__close')
  $('.filter__btn--offer').toggleClass('btn__close')
});

$('.filter__btn--brands').on('click', function(){
  $('.filter__brands-list').toggleClass('filter__close')
  $('.filter__btn--brands').toggleClass('btn__close')
});

$('.filter__btn--price').on('click', function(){
  $('.filter__price-form').toggleClass('filter__close')
  $('.filter__btn--price').toggleClass('btn__close')
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


var swiper = new Swiper('.product-slide__swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    560: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  },
  pagination: {
    el: '.top-slider__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.product-slide__next',
    prevEl: '.product-slide__prev',
  },
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

  

  
  
 