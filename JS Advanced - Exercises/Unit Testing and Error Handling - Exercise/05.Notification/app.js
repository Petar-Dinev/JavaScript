function notify(message) {
  let divEl = document.getElementById("notification");
  divEl.textContent = message;
  divEl.style.display = "block";

  divEl.addEventListener("click", () => {
    divEl.style.display = "none";
  });
}
