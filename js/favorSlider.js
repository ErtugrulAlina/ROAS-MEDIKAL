new Swiper('.favor-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 5,
  speed: 1000,
  slidesPerView: 4,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    800: {
      slidesPerView: 4,
      spaceBetween: 5
    }
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true
  // },
});