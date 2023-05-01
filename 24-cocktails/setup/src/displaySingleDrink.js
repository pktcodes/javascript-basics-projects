import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrink: name, strDrinkThumb: image, strInstructions: desc } = drink;
  const ingredientsList = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];

  const img = get(".drink-img");
  const title = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");

  document.title = name;

  img.src = image;
  title.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = ingredientsList
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
};

export default displayDrink;
