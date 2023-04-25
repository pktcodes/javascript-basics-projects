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
  console.log(list);
};

// Start Function
const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
