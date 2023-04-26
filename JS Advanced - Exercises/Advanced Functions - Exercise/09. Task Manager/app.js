function solve() {
  document.getElementById("add").addEventListener("click", onAdd);
  const sectionArr = Array.from(document.querySelectorAll('section'));

  function onAdd(e) {
    const taskName = document.getElementById("task").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;

    if (taskName && description && date) {
        e.preventDefault()
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
      const startBtn = document.createElement("button");
      startBtn.textContent = "Start";
      startBtn.className = "green";
      startBtn.addEventListener('click', onStart);
      buttonDiv.appendChild(startBtn);
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "red";
      deleteBtn.addEventListener('click', onDelete);
      buttonDiv.appendChild(deleteBtn);
      const finishBtn = document.createElement("button");
      finishBtn.textContent = "Finish";
      finishBtn.className = "orange";
      finishBtn.style.display = 'none';
      finishBtn.addEventListener('click', onFinish);
      buttonDiv.appendChild(finishBtn)
      article.appendChild(buttonDiv)
      sectionArr[1].appendChild(article)

      function onStart(e) {
        startBtn.style.display = 'none'
        finishBtn.style.display = '';
        sectionArr[2].appendChild(article)
      }
      function onDelete(e) {
        article.remove();
      }
      function onFinish(e) {
        deleteBtn.style.display = 'none';
        finishBtn.style.display = 'none';
        sectionArr[3].appendChild(article);
      }
    }
    

  }

}
