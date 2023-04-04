let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  // more code - if no matching products
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
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
