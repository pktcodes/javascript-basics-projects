import presentDrinks from "./src/presentDrinks.js";

const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
});
