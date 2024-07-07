const swiper1 = new Swiper('.main-products__swiper', {
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 10,

  navigation: {
    nextEl: '.main-products .swiper-button-next',
    prevEl: '.main-products .swiper-button-prev',
  },

  breakpoints: {
    1920: {
      spaceBetween: 10,
    },
    768: {
      spaceBetween: 10,
    },
    0: {
      spaceBetween: 5, 
    }
  }
});

const swiper2 = new Swiper('.main-articles__swiper', {
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 10,

    breakpoints: {
      1920: {
        spaceBetween: 10,
      },
      768: {
        spaceBetween: 10,
      },
      0: {
        spaceBetween: 4.74, 
      }
    }
});
