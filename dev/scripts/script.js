// Write your JavaScript here...
// Write your JavaScript here...
// JavaScript Document

const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-nav');


btnMenu.addEventListener('click', openMenu);

btnMenu.addEventListener('mousedown', function (e) {
    e.preventDefault();
});

function openMenu() {
    body.classList.toggle('show');
    nav.classList.add('activated');
}


function removeTransition(e) {

    if (e.matches) {
        body.classList.remove('show');
        nav.classList.remove('activated');
    }
}




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000);
}
