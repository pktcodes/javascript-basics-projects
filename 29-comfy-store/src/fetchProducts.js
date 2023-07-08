import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
