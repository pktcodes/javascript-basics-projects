import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  // Company Buttons
  const companies = [
    "all",
    ...new Set(store.map((product) => product.company)),
  ];
  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");

  // Filtering based on Buttons
  companiesDOM.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains("company-btn")) {
      let newStore = [];
      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = [
          ...store.filter((product) => product.company === element.textContent),
        ];
      }
      display(newStore, getElement(".products-container"));
    }
  });
};

export default setupCompanies;
