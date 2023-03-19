function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

/* Constructor Function */
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

  // Bind Functions
  // this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);

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

/* Open Modal */
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

  // Add Event Listeners to Buttons
  this.closeBtn.addEventListener("click", this.closeModal);
  this.nextBtn.addEventListener("click", this.nextImage);
  this.prevBtn.addEventListener("click", this.prevImage);
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  // Remove Event Listeners of Buttons - Good Practice - Prevents Memory Leak
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImage);
  this.prevBtn.removeEventListener("click", this.prevImage);
};

Gallery.prototype.nextImage = function () {
  const selected = this.modalImages.querySelector(".selected");
  const next = selected.nextElementSibling || this.modalImages.firstChild;
  selected.classList.remove("selected");
  next.classList.add("selected");
  this.setMainImage(next);
};

Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector(".selected");
  const prev = selected.previousElementSibling || this.modalImages.lastChild;
  selected.classList.remove("selected");
  prev.classList.add("selected");
  this.setMainImage(prev);
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
