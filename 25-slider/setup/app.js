import people from "./data.js";
import getElement from "./getElement.js";

const container = getElement(".slider-container");
const prevBtn = getElement(".prev-btn");
const nextBtn = getElement(".next-btn");

// Set Slides
container.innerHTML = people
  .map((person, slideIndex) => {
    // console.table(person);
    // console.log(slideIndex);

    const { img, name, job, text } = person;

    // more logic later
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }

    return `<article class="slide ${position}">
              <img
                src="${img}"
                alt="${name}"
                class="img"
              />
              <h4>${name}</h4>
              <p class="title">${job}</p>
              <p class="text">
                ${text}
              </p>
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
            </article>`;
  })
  .join("");

const startSlider = (type) => {
  const active = getElement(".active");
  const last = getElement(".last");
  const next = active.nextElementSibling;

  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startSlider();
});

prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
