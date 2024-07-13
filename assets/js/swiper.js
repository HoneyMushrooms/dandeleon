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

const swiper3 = new Swiper('.product-latest__swiper', {
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

const swiper4 = new Swiper(".product-vertical-swiper", {
  grabCursor: true,
  slidesPerView: 1,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
