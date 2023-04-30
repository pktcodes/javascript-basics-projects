import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const showDrinks = async (url) => {
  // Get Drinks
  const data = await fetchDrinks(url);

  // Display Drinks
  const section = await displayDrinks(data);
  console.log(section);
};

export default showDrinks;
