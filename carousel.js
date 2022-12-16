const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide;
let windowSize = window.innerWidth;

function setScreenSize() {
  if (windowSize >= 786 && windowSize <= 1359) {
    maxSlide = 3;
  } else if (windowSize >= 1360) {
    maxSlide = 2;
  } else if (windowSize <= 785) {
    maxSlide = slides.length - 1;
  }
}
window.addEventListener("load", (event) => {
  setScreenSize();
});

window.addEventListener('resize', function (event) {
  windowSize = window.innerWidth;
  setScreenSize();
});

nextSlide.addEventListener("click", function () {

  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");


prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});