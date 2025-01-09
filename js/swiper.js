var swiper = new Swiper(".homeimageslider", {
  slidesPerView: 1,
  speed:400,
  loop:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    clickable:true,
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".coSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView:3,
    },
    600: {
      slidesPerView:3,
    },
    1250: {
      slidesPerView: 4,
    },
  },
});



var swiper3 = new Swiper(".imagesSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  speed:400,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
  },
});

var swiper3 = new Swiper(".imagesSlider2", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  speed:400,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper(".sw2", {
  loop: true, // Enables infinite looping
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  autoplay: {
    delay: 0, // Removes delay for continuous motion
    disableOnInteraction: false,
  },
  speed: 2000, // Adjust this value for smooth linear scrolling speed
  freeModeMomentum: false, // Prevents interruption on user drag
  breakpoints: {
    300: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 6,
    },
  },
});
