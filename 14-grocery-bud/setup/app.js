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
  if (value !== "" && editFlag === false) {
    console.log("add item to the list");
  } else if (value !== "" && editFlag === true) {
    console.log("editing item");
  } else {
    console.log("empty value");
  }
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
