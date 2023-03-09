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

/* Clear Items */
clearBtn.addEventListener("click", clearItems);

/* 
======================
FUNCTIONS
======================
*/
// Add Item
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
    // Delete Button
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);

    // Edit Button
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

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
    editElement.innerHTML = value;
    displayAlert("value added", "success");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
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

// Clear Items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  // localStorage.removeItem("list");
}

// Delete Item
function deleteItem(event) {
  const element = event.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  // No items - Hide Container for Clear Items Button
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item deleted", "danger");
  // When we edit and delete, we want to change submitbtn from edit to default
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}

// Edit item
function editItem(event) {
  const element = event.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = event.currentTarget.parentElement.previousElementSibling;
  input.value = editElement.innerHTML;
  input.focus();
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
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
  const grocery = { id: id, value: value };

  /* Using If else statement */
  // let items = localStorage.getItem("list");
  // if (items) {
  //   items = JSON.parse(localStorage.getItem("list"));
  // } else {
  //   items = [];
  // }

  /* Using Ternary Operator */
  let items = getLocalStorage();
  console.log(items);
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  // console.log("added to local storage");
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

/* 
=====================
local storage API
=====================
Methods: 
setItem()
getItem()
removeItem()
always values as strings especially arrays
*/
// localStorage.setItem("orange", JSON.stringify(["item1", "item2", "item3"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// console.log(oranges);
// localStorage.removeItem("orange");

/* 
======================
SETUP ITEMS
======================
*/
