const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".form-input");
const resultsDOM = document.querySelector(".results");

formDOM.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    resultsDOM.innerHTML = `<div class="error">
                                please enter valid search term
                            </div>`;
    return;
  }
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  console.log(searchValue);
};
