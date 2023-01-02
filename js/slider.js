new Swiper('.swiper-main', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
});