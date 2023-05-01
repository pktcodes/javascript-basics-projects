import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // Get Drinks
  const data = await fetchDrinks(url);

  // Display Drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
