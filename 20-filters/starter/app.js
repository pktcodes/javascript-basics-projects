let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  // more code - if no matching products
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, No Products Matched Your Search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      // const { id, title, image, price } = product;

      return `<article class="product" data-id="${id}">
                <img
                  src="${image}"
                  class="img product-img"
                />
                <footer>
                  <h5 class="product-name">${title}</h5>
                  <span class="product-price">$${price}</span>
                </footer>
              </article>`;
    })
    .join("");
};

displayProducts();

/* Filter Based on Search Text */
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue.toLowerCase());
  });
  console.log(filteredProducts);
  displayProducts();
});

/* Buttons Filter*/
const companiesDOM = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];

  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button type="button" class="btn company-btn" data-id="${company}">${company}</button>`;
    })
    .join("");
};

displayButtons();

companiesDOM.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("company-btn")) {
    console.log(element.dataset.id);
    if (element.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(
        (product) => product.company === element.dataset.id
      );
    }
    searchInput.value = "";
    displayProducts();
  }
});
