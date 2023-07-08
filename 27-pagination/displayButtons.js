const displayButtons = (container, pages, activeIndex) => {
  const btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      pageIndex === activeIndex ? "active-btn" : null
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class ="prev-btn">prev</button>`);
  container.innerHTML = btns.join("");
};

export default displayButtons;
