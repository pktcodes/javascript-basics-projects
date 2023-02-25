// using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const question = event.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
