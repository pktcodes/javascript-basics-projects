import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get('[name="input"]');

form.addEventListener("keyup", (event) => {
  event.preventDefault();
  const value = input.value;
  if (!value) {
    presentDrinks(`${baseURL}a`);
    return;
  }
  presentDrinks(`${baseURL}${value}`);
});
