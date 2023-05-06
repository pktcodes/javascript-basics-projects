import subLinks from "./data.js";
import getElement from "./getElement.js";

const toggleBtn = getElement(".toggle-btn");
const closeBtn = getElement(".close-btn");
const sidebarWrapper = getElement(".sidebar-wrapper");
const sidebarLinks = getElement(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = getElement(".submenu");
const hero = getElement(".hero");
const nav = getElement("nav");

/* Show / Hide Sidebar */
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

/* Set SubLinks */
sidebarLinks.innerHTML = subLinks
  .map((subLink) => {
    const { page, links } = subLink;
    return `<article>
              <h4>${page}</h4>
              <div class="sidebar-sublinks">
              ${links
                .map((link) => {
                  const { label, icon, url } = link;
                  return `<a href="${url}" class="link">
                            <i class="${icon}"></i>
                            ${label}
                          </a>`;
                })
                .join("")}
              </div>
            </article>`;
  })
  .join("");

/* Links - Submenu */
linkBtns.forEach((btn) => {
  // console.dirxml(btn);
  btn.addEventListener("mouseover", (event) => {
    const text = event.currentTarget.textContent;
    const tempBtn = event.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = subLinks.find(({ page }) => page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.innerHTML = `<section>
                            <h4>${page}</h4>
                            <div class="submenu-center col-2">
                            ${links
                              .map((link) => {
                                const { label, icon, url } = link;
                                return `<a href="${url}">
                                          <i class="${icon}"></i>${label}
                                        </a>`;
                              })
                              .join("")}
                            </div>
                          </section>`;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      submenu.classList.add("show");
    }
  });
});
