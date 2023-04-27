const productDOM = document.querySelector(".product");

const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;

    /* Gets the query params string */
    // console.log(window.location.search);

    /* Gets the value of the key from query params of the URL */
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was an error looking for the product. Please try again later</p>`;
  }
};

const displayProduct = (data) => {
  console.log(data);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
