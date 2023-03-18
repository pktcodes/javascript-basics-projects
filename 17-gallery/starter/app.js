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
  // Making Array from NodeList using Spread Operator
  this.list = [...element.querySelectorAll(".img")];

  // Modal is in document, not in element
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.prevBtn = getElement(".prev-btn");
  this.nextBtn = getElement(".next-btn");
}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
