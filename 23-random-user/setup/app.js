import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const randomBtn = get(".btn");
const icons = [...document.querySelectorAll(".icon")];

const showUser = async () => {
  // Get User from API
  const person = await getUser();
  console.log(person);
  // Display User
};

window.addEventListener("DOMContentLoaded", showUser);
randomBtn.addEventListener("click", showUser);
