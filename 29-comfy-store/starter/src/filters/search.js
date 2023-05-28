import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupSearch = (store) => {
  const form = getElement(".input-form");
  const searchInput = getElement(".search-input");

  form.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value) || name.includes(value)) {
          return product;
        }
      });
      display(newStore, getElement(".products-container"), true);
      if (newStore.length < 1) {
        const productsContainer = getElement(".products-container");
        productsContainer.innerHTML =
          '<h3 class="filter-error">sorry, no products matched your search</h3>';
      }
    } else {
      display(store, getElement(".products-container"), true);
    }
  });
};

export default setupSearch;
