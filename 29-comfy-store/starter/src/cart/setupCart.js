// importcartTotal
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

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

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
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const updateCartItemAmountDOM = items.find(
      (value) => value.dataset.id === id
    );
    updateCartItemAmountDOM.textContent = amount;
  }

  // Display Cart Item Count
  displayCartItemCount();
  // Display Cart Total
  displayCartTotal();
  // Set Cart to Local Storage for Synchronization across pages
  setStorageItem("cart", cart);

  openCart();
};

const displayCartItemCount = () => {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
};

const displayCartTotal = () => {
  const total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `total : ${formatPrice(total)}`;
};

const displayCartItemsDOM = () => {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
};

const removeItem = (id) => {
  cart = cart.filter((cartItem) => cartItem.id !== id);
};

const increaseAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

const setupCartFunctionality = () => {
  cartItemsDOM.addEventListener("click", (event) => {
    const element = event.target;
    const parent = event.target.parentElement;
    const id = event.target.dataset.id;
    const parentId = event.target.parentElement.dataset.id;

    // Remove Item
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);
      // parent.parentElement.remove();
      element.parentElement.parentElement.remove();
    }

    // Increase Item
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(parentId);
      parent.nextElementSibling.textContent = newAmount;
    }

    // Decrease Item

    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
};

// Run to get latest data values from cart store array across all pages
const init = () => {
  // Display Cart Item Count
  displayCartItemCount();
  // Display Cart Total
  displayCartTotal();
  // Display Cart Items
  displayCartItemsDOM();
  // Setup Cart Functionality - Buttons
  setupCartFunctionality();
};

init();
