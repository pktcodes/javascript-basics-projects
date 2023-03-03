const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const countdownItems = document.querySelectorAll(".deadline-format h4");
console.log(countdownItems);

const futureDate = new Date(2023, 3, 4, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
