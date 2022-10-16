const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 24,

  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
