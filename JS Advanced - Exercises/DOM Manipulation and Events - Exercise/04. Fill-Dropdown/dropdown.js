function addItem() {
  let newItemText = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");
  let selectMenu = document.getElementById("menu");

  let newOptionItem = document.createElement("option");
  newOptionItem.textContent = newItemText.value;
  newOptionItem.value = newItemValue.value;
  selectMenu.appendChild(newOptionItem);

  newItemText.value = "";
  newItemValue.value = "";
}
