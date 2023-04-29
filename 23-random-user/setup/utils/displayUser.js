import get from "./getElement.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  // console.log(person);
  img.src = person.image;
  title.textContent = "My name is";
  value.textContent = person.name;
  btns.forEach((btn) => btn.classList.remove("active"));
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    // console.log(label);
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};

export default displayUser;
