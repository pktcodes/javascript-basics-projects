import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

/* Everytime the index is changed, we will regenerate the UI i.e. followers, buttons */
const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

/* Initial Load */
const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "pagination";
  pages = paginate(followers);
  setupUI(followers);
};

/* Clicking Buttons  */
btnContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-container")) {
    return;
  }
  if (event.target.classList.contains("page-btn")) {
    index = parseInt(event.target.dataset.index);
  }
  if (event.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (event.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

window.addEventListener("load", init);
