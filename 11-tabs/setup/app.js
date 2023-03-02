const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (event) {
  const id = event.target.dataset.id;
  if (id) {
    // remove active for all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");

    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const contentElement = document.getElementById(id);
    contentElement.classList.add("active");
  }
});
