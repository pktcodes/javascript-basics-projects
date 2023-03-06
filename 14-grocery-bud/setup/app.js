/* 
======================
SELECT ITEMS 
======================
*/
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const input = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

/* Edit Option */
let editElement;
let editFlag = false;
let editID = "";

/* 
======================
EVENT LISTENERS
======================
*/
/* Submit Form */
form.addEventListener("submit", addItem);

/* 
======================
FUNCTIONS
======================
*/
function addItem(event) {
  event.preventDefault();

  const value = input.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    // Create Element
    const element = document.createElement("article");
    // Add class
    element.classList.add("grocery-item");
    // Add data-id
    element.setAttribute("data-id", id);

    // John's Approach
    // const dataAttribute = document.createAttribute("data-id");
    // dataAttribute.value = id;
    // element.setAttributeNode(dataAttribute);

    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    // Append Child
    list.appendChild(element);
    // Display Alert
    displayAlert("item added to the list", "success");
    // Show Container
    container.classList.add("show-container");
    // Add to Local Storage
    addToLocalStorage(id, value);
    // Setback To Default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("editing item");
  } else {
    displayAlert("please enter value", "danger");
  }
}

// Show Alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // Remove Alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// Setback To Default
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

/* 
======================
LOCAL STORAGE
======================
*/
function addToLocalStorage(id, value) {
  console.log("added to local storage");
}

/* 
======================
SETUP ITEMS
======================
*/
