function extractText() {
  const list = Array.from(document.querySelectorAll("li"));
  const result = list.map((el) => el.textContent).join("\n");

  document.getElementById("result").value = result;
}
