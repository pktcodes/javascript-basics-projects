import get from "./getElement.js";

const title = get(".title");
const section = get(".section-center");

const displayDrinks = ({ drinks }) => {
  if (!drinks) {
    title.textContent = `sorry, no drinks matched your search`;
    section.textContent = null;
    return;
  }

  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: title, strDrinkThumb: image } = drink;

      // id, image, title,
      return `<a href="./drink.html">
              <article class="cocktail" data-id="${id}">
                <img src="${image}" alt="${title}" />
                <h3>${title}</h3>
              </article>
            </a>`;
    })
    .join("");
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
