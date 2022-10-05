function addItem() {
  const list = document.getElementById("items");
  const input = document.getElementById("newItemText").value;
  const a = document.createElement("a");
  a.textContent = "[Delete]";
  a.href = "#";
  a.addEventListener("click", onDelete);
  const li = document.createElement("li");
  li.textContent = input;
  li.appendChild(a);
  list.appendChild(li);
  document.getElementById("newItemText").value = "";

  function onDelete(event) {
    event.target.parentNode.remove();
  }
}
