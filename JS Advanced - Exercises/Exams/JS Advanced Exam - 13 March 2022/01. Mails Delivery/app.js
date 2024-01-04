function solve() {
  const addBtn = document.getElementById("add");
  const resetBtn = document.getElementById("reset");

  const recipientInput = document.getElementById("recipientName");
  const titleInput = document.getElementById("title");
  const messageInput = document.getElementById("message");

  const listMailsUl = document.getElementById("list");
  const sentListUl = document.querySelector(".sent-list");
  const deleteListUl = document.querySelector(".delete-list");

  addBtn.addEventListener("click", onAddBtnClick);
  resetBtn.addEventListener("click", resetForm);

  function onAddBtnClick(e) {
    e.preventDefault();

    const mail = {
      recipient: recipientInput.value,
      title: titleInput.value,
      message: messageInput.value,
    };

    if (Object.values(mail).some((v) => !v)) {
      return;
    }
    console.log("hi");
    const li = document.createElement("li");
    const titleHeader = document.createElement("h4");
    titleHeader.textContent = `Title: ${mail.title}`;
    const recipientHeader = document.createElement("h4");
    recipientHeader.textContent = `Recipient Name: ${mail.recipient}`;
    const span = document.createElement("span");
    span.textContent = mail.message;
    const div = document.createElement("div");
    div.id = "list-action";
    li.appendChild(titleHeader);
    li.appendChild(recipientHeader);
    li.appendChild(span);
    li.appendChild(div);
    const sendBtn = createButton(
      "submit",
      { name: "id", value: "send" },
      "Send"
    );
    sendBtn.addEventListener("click", onSend);
    const deleteBtn = createButton(
      "submit",
      { name: "id", value: "delete" },
      "Delete"
    );
    deleteBtn.addEventListener("click", onDeleteClick);
    div.appendChild(sendBtn);
    div.appendChild(deleteBtn);
    listMailsUl.appendChild(li);
    resetInputs();

    function onSend() {
      li.remove();
      const sentLi = createLiEl();
      const btnDiv = document.createElement("div");
      btnDiv.className = "btn";
      const deleteButton = createButton(
        "submit",
        { name: "class", value: "delete" },
        "Delete"
      );
      deleteButton.addEventListener("click", onDelete);
      btnDiv.appendChild(deleteButton);
      sentLi.appendChild(btnDiv);
      sentListUl.appendChild(sentLi);

      function onDelete() {
        sentLi.remove();
        deleteLi();
      }
    }

    function onDeleteClick() {
      li.remove();
      deleteLi();
    }

    function createLiEl() {
      const liEl = document.createElement("li");
      const recipientSpan = document.createElement("span");
      recipientSpan.textContent = `To: ${mail.recipient}`;
      const spanTitle = document.createElement("span");
      spanTitle.textContent = `Title: ${mail.title}`;
      liEl.appendChild(recipientSpan);
      liEl.appendChild(spanTitle);
      return liEl;
    }
    function deleteLi() {
      const deletedLi = createLiEl();
      deleteListUl.appendChild(deletedLi);
    }
  }

  function createButton(type, attribute, content) {
    console.log(type);
    console.log(attribute);
    console.log(content);
    const button = document.createElement("button");
    button.type = type;
    if ((attribute.name == "id")) {
      button.id = attribute.value;
    } else {
      button.className = attribute.value;
    }
    button.textContent = content;
    return button;
  }

  function resetForm(e) {
    e.preventDefault();
    resetInputs();
  }

  function resetInputs() {
    recipientInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  }
}

solve();
