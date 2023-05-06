import sublinks from "./data.js";
import getElement from "./getElement.js";

const toggleBtn = getElement(".toggle-btn");
const closeBtn = getElement(".close-btn");
const sidebarWrapper = getElement(".sidebar-wrapper");
const sidebarLinks = getElement(".sidebar-links");
// const submenu = getElement(".submenu");
const hero = getElement(".hero");
const nav = getElement("nav");

/* Show / Hide Sidebar */
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});
