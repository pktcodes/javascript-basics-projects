const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchJoke();
});

const fetchJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: { accept: "application/json", "user-agent": "string" },
    });
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "There was an error...";
    console.log(error);
  }
};

fetchJoke();
