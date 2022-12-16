let slideIndex = 0;
showSlides();
//funktionen der viser slidesne
function showSlides() {
  let i;
  //et array der går ind og vælger/finder alle objekter/class's med navnet "mySlides" og "dots" og bruger dem
  //via en "DOM" som henter dem fra HTML
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //Loop der skifter slidesne ud med hinanden når har haft en vis længde som vi sætter en timer på senere
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  //kontrolstruktur
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  //loop for dots så de følger slidesne, i small og medium skærm størrelse (fjernet på large)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //timeren (event)
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}