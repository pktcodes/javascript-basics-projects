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
  console.log(id);
  openCart();
};

const init = () => {
  console.log(cart);
};

init();
