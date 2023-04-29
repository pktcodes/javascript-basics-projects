import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const randomBtn = get(".btn");

const showUser = async () => {
  // Get User from API
  const person = await getUser();
  // Display User
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
randomBtn.addEventListener("click", showUser);
