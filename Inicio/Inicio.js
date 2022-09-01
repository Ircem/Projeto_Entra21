let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let IMG = document.getElementsByClassName("Troca_IMG");
  let PPro = document.getElementsByClassName("pro");
  if (n > IMG.length) {slideIndex = 1}
  if (n < 1) {slideIndex = IMG.length}
  for (i = 0; i < IMG.length; i++) {
    IMG[i].style.display = "none";
  }
  for (i = 0; i < PPro.length; i++) {
    PPro[i].className = PPro[i].className.replace(" active", "");
  }
  IMG[slideIndex-1].style.display = "block";
  PPro[slideIndex-1].className += " active";
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}