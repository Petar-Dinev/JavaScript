function addItem() {
  const list = document.getElementById("items");
  const input = document.getElementById("newItemText").value;

  const li = document.createElement("li");
  li.textContent = input;
  list.appendChild(li);
  document.getElementById("newItemText").value = "";
}
