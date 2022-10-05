function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  const result = document.getElementById("result");

  gradient.addEventListener("mousemove", mouseOver);
  gradient.addEventListener("mouseout", mouseOut);

  function mouseOver(event) {
    result.textContent =
      Math.trunc((event.offsetX / event.target.clientWidth) * 100) + "%";
  }
  function mouseOut(event) {
    result.textContent = "";
  }
}
