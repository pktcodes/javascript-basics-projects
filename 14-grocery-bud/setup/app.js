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
    console.log("add item to the list");
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

/* 
======================
LOCAL STORAGE
======================
*/

/* 
======================
SETUP ITEMS
======================
*/
