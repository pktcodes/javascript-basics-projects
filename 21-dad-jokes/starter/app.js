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
    // console.log(response);
    if (!response.ok) {
      // It throws an error which will trigger the catch statement
      throw new Error("Error...");
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    // Can access the throw error through "error.message"
    // console.log(error.message);

    result.textContent = "There was an error...";
  }
};

fetchJoke();
