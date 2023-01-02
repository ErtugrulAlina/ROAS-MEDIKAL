new Swiper('.testimonials-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 25,
  slidesPerView: 3,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});