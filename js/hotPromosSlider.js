const swiper = new Swiper(".hotPromosSwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  }
});