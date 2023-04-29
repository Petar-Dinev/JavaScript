function solve() {
  document.getElementById("add").addEventListener("click", onAdd);
  const sectionArr = Array.from(document.querySelectorAll("section"));

  function onAdd(e) {
    e.preventDefault();
    const taskName = document.getElementById("task").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;

    const startBtn = document.createElement("button");
    startBtn.textContent = "Start";
    startBtn.className = "green";
    startBtn.addEventListener("click", onStart);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "red";
    deleteBtn.addEventListener("click", onDelete);

    const finishBtn = document.createElement("button");
    finishBtn.textContent = "Finish";
    finishBtn.className = "orange";
    finishBtn.addEventListener("click", onFinish);

    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = taskName;
    article.appendChild(h3);
    const p1 = document.createElement("p");
    p1.textContent = `Description: ${description}`;
    article.appendChild(p1);
    const p2 = document.createElement("p");
    p2.textContent = `Due Date: ${date}`;
    article.appendChild(p2);
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "flex";
    buttonDiv.appendChild(startBtn);
    buttonDiv.appendChild(deleteBtn);
    article.appendChild(buttonDiv);

    if (taskName && description && date) {
      sectionArr[1].children[1].appendChild(article);
      document.getElementById('task').value = "";
      document.getElementById('description').value = "";
      document.getElementById('date').value = "";
    }

    function onStart(e) {
      startBtn.remove();
      buttonDiv.appendChild(finishBtn);
      document.getElementById("in-progress").appendChild(article);
    }

    function onDelete(e) {
      article.remove();
    }

    function onFinish(e) {
      buttonDiv.remove()
      sectionArr[3].children[1].appendChild(article);
    }
  }
}
