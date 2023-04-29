import get from "./utils/getElement.js";

const URL = "https://randomuser.me/api/";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const randomBtn = get(".btn");
const icons = [...document.querySelectorAll(".icon")];
