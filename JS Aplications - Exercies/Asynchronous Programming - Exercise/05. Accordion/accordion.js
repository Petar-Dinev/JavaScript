function solution() {
  getArticlesTitles();

  const sectionEl = document.getElementById("main");
  sectionEl.addEventListener("click", onClick);

  async function getArticlesTitles() {
    const url = "http://localhost:3030/jsonstore/advanced/articles/list";

    const response = await fetch(url);
    const articlesNames = await response.json();

    render(articlesNames);
  }

  function render(arr) {
    const divs = arr.map((obj) => {
      return createArticle(obj.title, obj._id);
    });

    sectionEl.replaceChildren(...divs);
  }

  function createArticle(title, id) {
    let accordionDiv = document.createElement("div");
    accordionDiv.classList.add("accordion");
    let headDiv = document.createElement("div");
    headDiv.classList.add("head");
    let spanEl = document.createElement("span");
    spanEl.textContent = title;
    let moreBtn = document.createElement("button");
    moreBtn.classList.add("button");
    moreBtn.id = id;
    moreBtn.textContent = "More";
    headDiv.appendChild(spanEl);
    headDiv.appendChild(moreBtn);
    accordionDiv.appendChild(headDiv);
    let extraDiv = document.createElement("div");
    extraDiv.classList.add("extra");
    let pEl = document.createElement("p");
    extraDiv.appendChild(pEl);
    accordionDiv.appendChild(extraDiv);

    return accordionDiv;
  }

  async function getContents(id) {
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function onClick(e) {
    if (e.target.tagName == "BUTTON") {
      let btn = e.target;
      let id = btn.id;
      const data = await getContents(id);
      let pEl = btn.parentElement.parentElement.querySelector("p");
      pEl.textContent = data.content;
      let contentDiv = btn.parentElement.parentElement.querySelector(".extra");

      if (btn.textContent == "More") {
        contentDiv.style.display = "block";
        btn.textContent = "Less";
      } else {
        contentDiv.style.display = "none";
        btn.textContent = "More";
      }
    }
  }
}
solution();
