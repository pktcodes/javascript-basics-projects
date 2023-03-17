/* Helper Function */
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check the ${selection} selector, no such element exists`
  );
}

/* Constructor Function */
function Counter(element, value) {
  this.counter = element;
  this.intialValue = value;
  this.value = value;
  this.decreaseBtn = element.querySelector(".decrease");
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;

  // Bind "this" to the function
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  console.log(this);
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

/* Prototype */
Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = this.intialValue;
  this.valueDOM.textContent = this.value;
};

/* Creating Instances */
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
