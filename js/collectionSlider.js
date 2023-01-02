new Swiper('.collection-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15,
  speed: 1000,
  slidesPerView: 3,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 15
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 15
    }
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
});