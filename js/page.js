//* Page Scripts
// Mobile Navigaton Toggle
function navToggle() {                            // creates a new function named navToggle
  var x = document.getElementById("main-nav");    // creates a variable set to #main-nav
    if (x.className === "topnav") {               // if #main-nav has a class of .topnav,
    x.className += " responsive";                 // then add a new class
  } else {                                        // if it doesn't,
    x.className = "topnav";                       // set class to .topnav
  }
}

//Slideshow function
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Button 1
var modal = document.buttongetElementById("1");
var btn = document.getElementById("button1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}

//Button 2
var modal = document.buttongetElementById("2");
var btn = document.getElementById("button2");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 3
var modal = document.buttongetElementById("3");
var btn = document.getElementById("button3");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 4
var modal = document.buttongetElementById("4");
var btn = document.getElementById("button4");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 5
var modal = document.buttongetElementById("5");
var btn = document.getElementById("button5");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 6
var modal = document.buttongetElementById("6");
var btn = document.getElementById("button6");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 7
var modal = document.buttongetElementById("7");
var btn = document.getElementById("button7");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 8
var modal = document.buttongetElementById("8");
var btn = document.getElementById("button8");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 9
var modal = document.buttongetElementById("9");
var btn = document.getElementById("button9");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 10
var modal = document.buttongetElementById("10");
var btn = document.getElementById("button10");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 11
var modal = document.buttongetElementById("11");
var btn = document.getElementById("button11");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
//Button 12
var modal = document.buttongetElementById("12");
var btn = document.getElementById("button12");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
  if (event.target == modal) {modal.style.display = "none";}
}
