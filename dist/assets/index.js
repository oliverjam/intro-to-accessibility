const keyCodes = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

const slides = Array.from(document.querySelectorAll('.slide'));
slides.forEach((slide, i) => (slide.id = `slide-${i}`));

let currentSlide = 0;

function scroll(e) {
  if (e.keyCode === keyCodes.up) {
    if (e.preventDefault) e.preventDefault();
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
      updateProgress(currentSlide - 1);
      currentSlide -= 1;
      return;
    } else {
      updateProgress(slides.length - 1);
      scrollToSlide(slides.length - 1);
      currentSlide = slides.length - 1;
      return;
    }
  }
  if (e.keyCode === keyCodes.down) {
    if (e.preventDefault) e.preventDefault();
    if (currentSlide < slides.length - 1) {
      updateProgress(currentSlide + 1);
      scrollToSlide(currentSlide + 1);
      currentSlide += 1;
      return;
    } else {
      updateProgress(0);
      scrollToSlide(0);
      currentSlide = 0;
      return;
    }
  }
}

function scrollToSlide(index) {
  window.location.href = window.location.origin + `#slide-${index}`;
}

document.addEventListener('keydown', scroll);

document.querySelector('.container').classList.add('hijack');

function updateProgress(index) {
  document.querySelector('.progress').textContent = `${index + 1} / ${
    slides.length
  }`;
}

updateProgress(currentSlide);
