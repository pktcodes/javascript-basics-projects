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

/* includes("") - gives true */
// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes("");
//   })
// );
