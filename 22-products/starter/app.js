const url = "https://course-api.com/javascript-store-productss";

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">there was an error</p>`;
  }
};

fetchProducts();
