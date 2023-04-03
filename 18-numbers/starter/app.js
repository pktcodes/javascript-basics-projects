const numbers = [...document.querySelectorAll(".number")];

const updateCount = (element) => {
  const value = parseInt(element.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  console.log(increment);
};

numbers.forEach((item) => {
  updateCount(item);
});
