import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response.ok && response.status === 200) {
    return response.json();
  }
  return response;
};

export default fetchProducts;
