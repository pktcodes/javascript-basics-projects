import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  //   Find Maximum Price
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);

  //   Initial Values
  priceInput.min = 0;
  priceInput.max = maxPrice;
  priceInput.value = maxPrice;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener("input", () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;

    const newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement(".products-container"), true);
    if (newStore.length < 1) {
      const productsContainer = getElement(".products-container");
      productsContainer.innerHTML = `<h3 class="filter-error">sorry, no products match your search</h3>`;
    }
  });
};

export default setupPrice;
