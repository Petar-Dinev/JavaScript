function toggle() {
  let spanName = document.querySelector(".head span").textContent;
  if (spanName == "More") {
    document.getElementById("extra").style.display = "block";
    document.querySelector(".head span").textContent = "Less";
  } else if (spanName == "Less") {
    document.querySelector(".head span").textContent = "More";
    document.getElementById("extra").style.display = "none";
  }
}
