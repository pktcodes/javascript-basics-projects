const productDOM = document.querySelector(".product");

const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;

    /* Gets the query params string */
    // console.log(window.location.search);

    /* Gets the value of the key from query params of the URL */
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was an error looking for the product. Please try again later</p>`;
  }
};

const displayProduct = (product) => {
  // image(url: img), name: title, company, price, colors, description

  const {
    company,
    colors,
    price,
    name: title,
    description,
    image,
  } = product.fields;
  const { url: img } = image[0];

  // Colors

  document.title = title.toUpperCase();

  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" alt="${title}" class="img" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">
            <span class="product-color"></span>
            <span class="product-color" style="background-color: red"></span>         
          </div>
          <p>
          ${description}
          </p>
          <button type="button" class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
