const swiper = new Swiper('.swiper', {
  loop: true,
    
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  freeMode: true,
  breakpoints: {
    400: {
      spaceBetween: 3080,
  },
    1240: {
        spaceBetween: 680,
    },
    1650: {
        spaceBetween: 300,
    },
    
},


});