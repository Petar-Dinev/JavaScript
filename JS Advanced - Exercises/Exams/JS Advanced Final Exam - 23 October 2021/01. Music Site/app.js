window.addEventListener("load", solve);

function solve() {
  const addBtn = document.getElementById("add-btn");
  const collectionSection = document.querySelector(".all-hits-container");
  const saveCollection = document.getElementsByClassName("saved-container")[0];
  const likesP = document.querySelector("#total-likes p");
  addBtn.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    const genreInput = document.getElementById("genre")
    const nameInput = document.getElementById("name")
    const authorInput = document.getElementById("author")
    const dateInput = document.getElementById("date")
    const genre = genreInput.value;
    const name = nameInput.value;
    const author = authorInput.value;
    const date = dateInput.value;

    if (genre == "" || name == "" || author == "" || date == "") {
      return;
    }
    const div = document.createElement("div");
    div.className = "hits-info";
    const img = document.createElement("img");
    img.src = "./static/img/img.png";
    div.appendChild(img);
    const firstH2 = createElement("h2", `Genre: ${genre}`);
    const secondH2 = createElement("h2", `Name: ${name}`);
    const thirdH2 = createElement("h2", `Author: ${author}`);
    const h3 = createElement("h3", `Date: ${date}`);
    div.appendChild(firstH2);
    div.appendChild(secondH2);
    div.appendChild(thirdH2);
    div.appendChild(h3);
    const saveBtn = createElement("button", "Save song", "className", "save-btn");
    const likeBtn = createElement("button", "Like song", "className", "like-btn");
    const deleteBtn = createElement("button", "Delete", "className", "delete-btn");
    div.appendChild(saveBtn);
    div.appendChild(likeBtn);
    div.appendChild(deleteBtn);
    saveBtn.addEventListener("click", onSave);
    likeBtn.addEventListener("click", onLike);
    deleteBtn.addEventListener("click", () => div.remove());
    collectionSection.appendChild(div);

    function onSave() {
      likeBtn.remove();
      saveBtn.remove();
      saveCollection.appendChild(div);
    }

    genreInput.value = '';
    nameInput.value = '';
    authorInput.value = '';
    dateInput.value = '';

    function onLike() {
      let currentLikes = likesP.textContent.split(":")[1].trim();
      likesP.textContent = `Total Likes: ${Number(currentLikes) + 1}`;
     likeBtn.disabled = true;
    }
  }


  function createElement(type, content, attribute, attributeContent) {
    const el = document.createElement(type);
    el.textContent = content;

    if (attribute) {
      el[attribute] = attributeContent;
    }
    return el;
  }
}
