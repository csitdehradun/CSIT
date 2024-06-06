var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 20,
    depth: 50,
    modifier: 2,
    slideShadows: true,
  },
  autoplay: {
  delay: 1000,
  pauseOnMouseEnter: true,
 },
 speed: 700,
});