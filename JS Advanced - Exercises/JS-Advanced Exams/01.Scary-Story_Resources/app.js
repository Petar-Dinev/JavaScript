window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const titleInput = document.getElementById("story-title");
  const genreInput = document.getElementById("genre");
  const storyInput = document.getElementById("story");
  const publishBtn = document.getElementById("form-btn");
  const form = document.querySelector("form");
  const previewSection = document.getElementById("preview-list");
  publishBtn.addEventListener("click", onPublish);
  const mainDiv = document.getElementById("main");

  function onPublish(e) {
    e.preventDefault();

    const values = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      age: ageInput.value,
      title: titleInput.value,
      genre: genreInput.value,
      story: storyInput.value,
    };
    if (
      values.firstName &&
      values.lastName &&
      values.age &&
      values.title &&
      values.story
    ) {
      const li = createEl("li", null, "story-info");
      const article = createEl("article");
      const h4 = createEl("h4", `Name: ${values.firstName} ${values.lastName}`);
      const p1 = createEl("p", `Age: ${values.age}`);
      li.appendChild(p1);
      const p2 = createEl("p", `Title: ${values.title}`);
      li.appendChild(p2);
      const p3 = createEl("p", `Genre: ${values.genre}`);
      li.appendChild(p3);
      const p4 = createEl("p", values.story);
      li.appendChild(p4);
      li.appendChild(article);
      const saveBtn = createEl("button", "Save Story", "save-btn");
      const editBtn = createEl("button", "Edit Story", "edit-btn");
      const deleteBtn = createEl("button", "Delete Story", "delete-btn");

      saveBtn.addEventListener("click", onSave);
      editBtn.addEventListener("click", onEdit);
      deleteBtn.addEventListener("click", onDelete);
      li.appendChild(saveBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      previewSection.appendChild(li);
      publishBtn.disabled = true;
      firstNameInput.value = '';
        lastNameInput.value = '';
        ageInput.value = '';
        storyInput.value = '';
        titleInput.value = '';

      function onSave(e) {
        mainDiv.innerHTML = "";
        const h1 = createEl("h1", "Your scary story is saved!");
        mainDiv.appendChild(h1)
      }
      
      function onEdit(e) {
        publishBtn.disabled = false;
        li.remove();
        firstNameInput.value = values.firstName;
        lastNameInput.value = values.lastName;
        ageInput.value = values.age;
        genreInput.value = values.genre;
        storyInput.value = values.story;
        titleInput.value = values.title;
      }
      function onDelete(e) {
        li.remove();
        publishBtn.disabled = false;
      }
    }
  }

  function createEl(type, content, attribute) {
    const el = document.createElement(type);
    if (content) {
      el.textContent = content;
    }
    if (attribute) {
      el.className = attribute;
    }
    return el;
  }
}
