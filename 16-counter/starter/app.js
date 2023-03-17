function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.decrease = element.querySelector(".decrease");
  this.reset = element.querySelector(".reset");
  this.increase = element.querySelector(".increase");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;
  console.log(this);
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check the ${selection} selector, no such element exists`
  );
}
