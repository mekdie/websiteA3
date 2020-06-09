var autoSlideIndex = 0;
showAutoSlides();

function showAutoSlides() {
  var i;
  var slides = document.getElementsByClassName("auto");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showAutoSlides, 2000); // Change image every 2 seconds
}