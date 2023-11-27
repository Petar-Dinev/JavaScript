
window.addEventListener('load', solve);

function solve() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const contactInput = document.getElementById("contact-number");
  const classTypeInput = document.getElementById("class-type");
  const classTimeInput = document.getElementById("class-time");
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", onSubmit);
  const previewSectionUl = document.getElementsByClassName("class-info")[0];
  const confirmSectionUl = document.getElementsByClassName("confirm-class")[0];

  function onSubmit(e) {
    e.preventDefault();
    if (
      nameInput.value == "" ||
      emailInput.value == "" ||
      contactInput.value == "" ||
      classTypeInput.value == "" ||
      classTimeInput.value == ""
    ) {
      return;
    }
    const li = document.createElement("li");
    li.className = "info-item";
    const article = document.createElement("article");
    article.className = "personal-info";
    const nameP = createP(nameInput.value);
    const emailP = createP(emailInput.value);
    const contactP = createP(contactInput.value);
    const classTypeP = createP(classTypeInput.value);
    const classTimeP = createP(classTimeInput.value);
    article.appendChild(nameP);
    article.appendChild(emailP);
    article.appendChild(contactP);
    article.appendChild(classTypeP);
    article.appendChild(classTimeP);
    li.appendChild(article);
    const editBtn = createBtn("edit-btn", "Edit");
    editBtn.addEventListener("click", onEdit);
    const continueBtn = createBtn("continue-btn", "Continue");
    continueBtn.addEventListener("click", onContinue);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);
    previewSectionUl.appendChild(li);
    nextBtn.disabled = true;
    nameInput.value = "";
    emailInput.value = "";
    contactInput.value = "";
    classTypeInput.value = "";
    classTimeInput.value = "";

    function onEdit() {
      li.remove();
      nameInput.value = nameP.textContent;
      emailInput.value = emailP.textContent;
      contactInput.value = contactP.textContent;
      classTypeInput.value = classTypeP.textContent;
      classTimeInput.value = classTimeP.textContent;
      nextBtn.disabled = false;
    }

    function onContinue() {
      li.className = "continue-info";
      confirmSectionUl.appendChild(li);
      editBtn.remove();
      continueBtn.remove();
      const confirmBtn = createBtn("confirm-btn", "Confirm");
      const cancelBtn = createBtn("cancel-btn", "Cancel");
      li.appendChild(cancelBtn);
      li.appendChild(confirmBtn);
      cancelBtn.addEventListener("click", onCancel);
      confirmBtn.addEventListener("click", onConfirm);

      function onCancel() {
        li.remove();
        nextBtn.disabled = false;
      }

      function onConfirm() {
        document.getElementById("main").remove();
        const h1 = document.createElement("h1");
        h1.id = "thank-you";
        h1.textContent =
          "Thank you for scheduling your appointment, we look forward to seeing you!";
        const dontBtn = document.createElement("button");
        dontBtn.id = "done-btn";
        document.querySelector("body").appendChild(h1);
        document.querySelector("body").appendChild(dontBtn);
        dontBtn.addEventListener("click", onDone);
        function onDone() {
          location.reload();
        }
      }
    }
  }

  function createP(content) {
    const p = document.createElement("p");
    p.textContent = content;
    return p;
  }
  function createBtn(className, content) {
    const btn = document.createElement("button");
    btn.className = className;
    btn.textContent = content;
    return btn;
  }
}
