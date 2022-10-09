function focused() {
  let inputs = Array.from(document.getElementsByTagName("input"));
  for (let input of inputs) {
    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", loseFocus);
  }

  function onFocus(event) {
    event.target.parentElement.classList.add("focused");
  }

  function loseFocus(event) {
    event.target.parentElement.classList.remove("focused");
  }
}
