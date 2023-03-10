const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}% `;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  /* Working with Slides */
  // if (counter > slides.length - 1) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }

  /* Working with Buttons */
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
