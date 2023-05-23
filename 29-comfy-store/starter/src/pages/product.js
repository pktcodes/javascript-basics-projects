// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

// cart product
let productID;

// show product when page loads
window.addEventListener("DOMContentLoaded", async () => {
  const urlID = window.location.search;

  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();

      //   Destructure Data
      const { id, fields } = product;
      productID = id;

      const { name, company, colors, price, description } = fields;
      const image = fields.image[0].thumbnails.large.url;

      //   Set Values
      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      colors.forEach((color) => {
        const spanElement = document.createElement("span");
        spanElement.classList.add("product-color");
        spanElement.style.background = color;
        colorsDOM.appendChild(spanElement);
      });
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
      <div>
        <h3 class="error">sorry, something went wrong</h3>
        <a href="index.html" class="btn">back to home</a>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }

  //  Once the product is ready to display, hide the loading
  loading.style.display = "none";
});

cartBtn.addEventListener("click", () => {
  addToCart(productID);
});
