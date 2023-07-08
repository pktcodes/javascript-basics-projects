const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { avatar_url, html_url, login } = person;
      return `<article class="card">
                <img src="${avatar_url}"/>
                <h4>${login}</h4>
                <a href="${html_url}" class="btn" target="_blank">view profile</a> 
              </article>`;
    })
    .join("");

  container.innerHTML = newFollowers;
};

export default display;
