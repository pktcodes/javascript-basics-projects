import fetchDrinks from "./fetchDrinks.js";

const showDrinks = async (url) => {
  // Get Drinks
  const data = await fetchDrinks(url);
  console.log(data);

  // Display Drinks
};

export default showDrinks;
