window.addEventListener("load", solve);

function solve() {
  const previewList = document.getElementById("preview-list");
  const collectionList = document.getElementById("collection");
  const nameInput = document.getElementById("gem-name");
  const colorInput = document.getElementById("color");
  const caratsInput = document.getElementById("carats");
  const priceInput = document.getElementById("price");
  const typeInput = document.getElementById("type");
  const addButton = document.getElementById("add-btn");

  addButton.addEventListener("click", onAddButtonClick);

  function onAddButtonClick(e) {
    e.preventDefault();
    if (
      nameInput.value == "" ||
      colorInput.value == "" ||
      caratsInput.value == "" ||
      priceInput.value == "" ||
      typeInput.value == ""
    ) {
      return;
    }
    const gemObj = {
      name: nameInput.value,
      color: colorInput.value,
      carats: caratsInput.value,
      price: priceInput.value,
      type: typeInput.value,
    };
    const li = document.createElement("li");
    li.className = "gem-info";
    const article = document.createElement("article");
    li.appendChild(article);
    const h4 = createElement("h4", gemObj.name);
    const pColor = createElement("p", `Color: ${gemObj.color}`);
    const pCarats = createElement("p", `Carats: ${gemObj.carats}`);
    const pPrice = createElement("p", `Price: ${gemObj.price}$`);
    const pType = createElement("p", `Type: ${gemObj.type}`);
    article.appendChild(h4);
    article.appendChild(pColor);
    article.appendChild(pCarats);
    article.appendChild(pPrice);
    article.appendChild(pType);
    const saveBtn = createButton("save-btn", "Save to Collection");
    const editBtn = createButton("edit-btn", "Edit Information");
    const cancelBtn = createButton("cancel-btn", "Cancel");
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(cancelBtn);
    saveBtn.addEventListener("click", onSave);
    editBtn.addEventListener("click", onEdit);
    cancelBtn.addEventListener("click", onCancel);

    addButton.disabled = true;
    previewList.appendChild(li);
    nameInput.value = "";
    colorInput.value = "";
    caratsInput.value = "";
    priceInput.value = "";
    typeInput.value = "";

    function onSave() {
      const liEl = document.createElement("li");
      let content = `${gemObj.name} - ${pColor.textContent}/ ${pCarats.textContent}/ ${pPrice.textContent}/ ${pType.textContent}`;
      const p = createElement("p", content);
      p.className = "collection-item";
      liEl.appendChild(p);
      collectionList.appendChild(liEl);
      onCancel();
    }
    function onEdit() {
      nameInput.value = gemObj.name;
      colorInput.value = gemObj.color;
      caratsInput.value = gemObj.carats;
      priceInput.value = gemObj.price;
      typeInput.value = gemObj.type;

      // addButton.disabled = false;
      // li.remove()
      onCancel();
    }
    function onCancel() {
      addButton.disabled = false;
      li.remove();
    }
  }

  function createElement(type, content) {
    const el = document.createElement(type);
    el.textContent = content;
    return el;
  }

  function createButton(className, content) {
    const btn = document.createElement("button");
    btn.className = className;
    btn.textContent = content;
    return btn;
  }
}
