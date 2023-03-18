function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  this.container = element;
  // Making Array from NodeList using Spread Operator
  this.list = [...element.querySelectorAll(".img")];

  // Modal is in document, not in element
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.prevBtn = getElement(".prev-btn");
  this.nextBtn = getElement(".next-btn");
  // Self
  // self = this;

  console.log("Gallery Constructor : ", this);

  this.container.addEventListener(
    "click",
    function (event) {
      // self.openModal();
      this.openModal(event);
    }.bind(this)
  );
}

Gallery.prototype.openModal = function () {
  console.log("Inside OpenModal : ", this);
  this.modal.classList.add("open");
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
