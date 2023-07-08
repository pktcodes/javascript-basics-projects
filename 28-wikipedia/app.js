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

/* Fetch Data */
const fetchPages = async (searchValue) => {
  resultsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    if (results.length < 1) {
      resultsDOM.innerHTML = `<div class="error">
                                no matching found. please try again
                              </div>`;
      return;
    }
    renderResults(results);
  } catch (error) {
    console.log(error);
    resultsDOM.innerHTML = `<div class="error">
                                there was an error...
                            </div>`;
  }
};

/* Render Data */
const renderResults = (list) => {
  const cardsList = list
    .map((page) => {
      const { pageid, title, snippet } = page;
      return `<a href="http://en.wikipedia.org/?curid=${pageid}" target="_blank">
                <h4>${title}</h4>
                <p>${snippet}</p>
            </a>`;
    })
    .join("");
  resultsDOM.innerHTML = `<div class="articles">${cardsList}</div>`;
};
