var slideIndex = 1;
var updateIndex=1;

var timer=setInterval(autoSlide, 4000);
var timer1=setInterval(autoSlide1, 4000);

function minusSlide(){
  clearInterval(timer);
  slideIndex = slideIndex - 2;
  if(slideIndex==-1){
    slideIndex=5;
  }
  autoSlide();
  timer=setInterval(autoSlide, 4000);
}
function plusSlide(){
  clearInterval(timer);
  autoSlide();
  timer=setInterval(autoSlide, 4000);
}

function currentSlide(n) {
  clearInterval(timer);
  autoSlide(slideIndex = n);
  timer=setInterval(autoSlide, 4000);
}


function minus(){
  clearInterval(timer1);
  updateIndex= updateIndex-2;
  if(updateIndex==-1){
    updateIndex=3;
  }
  autoSlide1();
  timer1=setInterval(autoSlide1, 4000);
}
function plus(){
  clearInterval(timer1);
  autoSlide1();
  timer1=setInterval(autoSlide1, 4000);
}
function updateSlide(n) {
  clearInterval(timer1);
  autoSlide1(updateIndex = n);
  timer1=setInterval(autoSlide1, 4000);
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

function autoSlide1() {
  var a;
  var slide = document.getElementsByClassName("slide");
  for (a = 0; a < slide.length; a++) {
    slide[a].style.display = "none";
  }
  updateIndex++;
  if (updateIndex > slide.length) {updateIndex = 1}
  slide[updateIndex-1].style.display = "block";
}

// Set the date we're counting down to
var countDownDate = new Date("Feb 11, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Let's Go";
  }
}, 1000);

