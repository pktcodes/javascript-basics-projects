// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCount = getElement(".cart-item-count");
const cartItems = getElement(".cart-items");
const cartTotal = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  // Checking if adding item is in Cart
  let item = cart.find((cartItem) => cartItem.id === id);

  // If doesn't exist, Add new item to cart
  if (!item) {
    // Find product
    let product = findProduct(id);
    // Add Product to Cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // Add product to DOM
    addToCartDOM(product);
  } else {
    // Update values of existing item in Cart
    console.log("Update Values in Cart");
  }

  openCart();
};

const init = () => {
  console.log(cart);
};

init();
