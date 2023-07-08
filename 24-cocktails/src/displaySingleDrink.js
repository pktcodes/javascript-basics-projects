import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrink: name, strDrinkThumb: image, strInstructions: desc } = drink;

  /*   Alternative Solution to Get All Ingredients */
  const list = Object.entries(drink).filter((item) => {
    const [key, value] = item;
    if (key.includes("Ingredient") && value) {
      return item;
    }
  });
  const ingredientsList = list.map((item) => {
    return item[1];
  });

  // Select Elements
  const img = get(".drink-img");
  const title = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");

  // Title
  document.title = name;

  // Set Data
  img.src = image;
  title.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = ingredientsList
    .map((item) => {
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
};

export default displayDrink;
