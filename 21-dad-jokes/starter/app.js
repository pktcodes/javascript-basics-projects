const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  console.log("click");
  fetchJoke();
});

async function fetchJoke() {
  const response = await fetch(url, {
    headers: { accept: "application/json", "user-agent": "string" },
  });
  const data = await response.json();
  result.textContent = data.joke;
}

fetchJoke();
