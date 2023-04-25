const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

// Fetching the products
const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">there was an error</p>`;
  }
};

// Display the products
const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];

      const formatPrice = price / 100;

      //id, name, price, image
      return `<a class="single-product" href="product.html">
            <img class="img single-product-img" src="${img}" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");

  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

// Start Function
const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
