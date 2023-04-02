const numbers = [...document.querySelectorAll(".number")];

const updateCount = (element) => {
  console.log(element);
};

numbers.forEach((item) => {
  updateCount(item);
});
