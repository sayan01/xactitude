var slideIndex = 1;

var timer=setInterval(autoSlide, 8000);

function minusSlide(){
  clearInterval(timer);
  slideIndex= slideIndex-2;
  if(slideIndex==-1){
    slideIndex=5;
  }
  autoSlide();
  timer=setInterval(autoSlide, 8000);
}
function plusSlide(){
  clearInterval(timer);
  autoSlide();
  timer=setInterval(autoSlide, 8000);
}

function currentSlide(n) {
  clearInterval(timer);
  autoSlide(slideIndex = n);
  timer=setInterval(autoSlide, 8000);
}

function autoSlide() {
  var a;
  var slides = document.getElementsByClassName("slides");
  for (a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}
