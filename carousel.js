// Select all slides 
//(array vil select alle class' med navnet .slide)(kan console.log for at vise array muligvis)
const slides = document.querySelectorAll(".slide");

// "loop" through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides, og så finder functionen og eventlisteneren nedenunder ud af hvor mange slides der skal være efter
let maxSlide;
// get window size
let windowSize = window.innerWidth;

//en function der læser størrelsen på skærmen der gå ind på siden og derefter sætter "max-slides" til at tilpasse
// sig efter den rigtige størrelse.
// så går eventlisteneren ind og ser om skærmen bliver resized, og så vil koden blive executed selv hvis skærmens størrelse ændres
function setScreenSize(){
  if (windowSize >= 786 && windowSize <= 1359){
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

window.addEventListener('resize', function(event){
    windowSize = window.innerWidth;
    setScreenSize(); 
  });
 
// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
// check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});