const setDrink = (section) => {
  section.addEventListener("click", (event) => {
    // Since Link navigate to drink.html, we can't see the actual result. Temporarily preventing the actual behavior
    // event.preventDefault();

    const id = event.target.parentElement.dataset.id;

    // No need of JSON.strinfy since "id" is in string format
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
