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
  this.imageName = getElement(".image-name");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.prevBtn = getElement(".prev-btn");
  this.nextBtn = getElement(".next-btn");

  // Self is a convention - self always points to Gallery
  // self = this;

  this.container.addEventListener(
    "click",
    function (event) {
      // self.openModal();

      if (event.target.classList.contains("img")) {
        this.openModal(event.target, this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      // console.log(image);
      return `<img 
              src="${image.src}" 
              alt="${image.alt}" 
              data-id="${image.dataset.id}" 
              title="${image.title}" 
              class="${
                selectedImage.dataset.id === image.dataset.id
                  ? "modal-img selected"
                  : "modal-img"
              }"
            />`;
    })
    .join("");
  console.log(this.list);
  this.modal.classList.add("open");
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
