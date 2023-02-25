// traversing the dom

/* const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const question = event.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
}); */

// using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    // console.log(btn);

    questions.forEach(function (item) {
      if (item !== question) {
        console.log(question);
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
