const URL = "https://randomuser.me/api/";

console.log(
  fetch(URL).then((response) => {
    return console.log(response);
  })
);
