window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const genderSelectInput = document.getElementById("genderSelect");
  const descriptionInput = document.getElementById("task");
  const formBtn = document.getElementById("form-btn");
  const form = document.querySelector("form");
  const inProgresDiv = document.getElementById("in-progress");
  const finishedDiv = document.getElementById("finished");
  const clearBtn = document.getElementById("clear-btn");
  const progressSpan = document.getElementById("progress-count");
  formBtn.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();

    const values = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      age: ageInput.value,
      gender: genderSelectInput.value,
      description: descriptionInput.value,
      dishesInProgres: progressSpan.textContent,
    };

    if (
      values.firstName &&
      values.lastName &&
      values.age &&
      values.description
    ) {
      form.reset();

      const li = document.createElement("li");
      li.className = "each-line";
      const article = document.createElement("article");
      const h4 = document.createElement("h4");
      h4.textContent = `${values.firstName} ${values.lastName}`;
      article.appendChild(h4);
      const p1 = document.createElement("p");
      p1.textContent = `${values.gender}, ${values.age}`;
      article.appendChild(p1);
      const p2 = document.createElement("p");
      p2.textContent = `Dish description: ${values.description}`;
      article.appendChild(p2);
      li.appendChild(article);
      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.textContent = "Edit";
      li.appendChild(editBtn);
      const completeBtn = document.createElement("button");
      completeBtn.className = "complete-btn";
      completeBtn.textContent = "Mark as complete";
      li.appendChild(completeBtn);
      inProgresDiv.appendChild(li);
      editBtn.addEventListener("click", onEdit);
      completeBtn.addEventListener("click", onComplete);
      values.dishesInProgres++;
      progressSpan.textContent = values.dishesInProgres;

      function onEdit(e) {
        firstNameInput.value = values.firstName;
        lastNameInput.value = values.lastName;
        ageInput.value = values.age;
        genderSelectInput.value = values.gender;
        descriptionInput.value = values.description;
        values.dishesInProgres--;
        progressSpan.textContent = values.dishesInProgres;
        li.remove();
      }

      function onComplete(e) {
        editBtn.remove();
        completeBtn.remove();
        values.dishesInProgres--;
        progressSpan.textContent = values.dishesInProgres;
        finishedDiv.appendChild(li);
      }

      clearBtn.addEventListener("click", onClear);

      function onClear(e) {
        finishedDiv.innerHTML = "";
      }
    }
  }
}
