function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  function onClick() {
    let tds = document.querySelectorAll(".container tbody tr td");
    let searchText = document.getElementById("searchField").value;

    for(let td of tds) {
      if(td.textContent.includes(searchText)) {
        td.parentNode.classList.add("select")
      }
    }
   document.getElementById("searchField").value = "";
  }
  let selectClass = Array.from(document.getElementsByClassName("select"));
  selectClass.forEach(el => el.classList.remove("select"));
}
