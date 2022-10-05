function deleteByEmail() {
  const input = document.querySelector("input").value;
  const tableDates = document.querySelectorAll(
    "#customers tbody tr td:nth-child(2)"
  );

  for (let td of tableDates) {
    let emailName = td.textContent;
    if (emailName == input) {
      let row = td.parentNode;
      row.parentNode.removeChild(row);
      document.querySelector("input").value = "";
      document.getElementById("result").textContent = "Deleted";
      return;
    }
  }
  document.getElementById("result").textContent = "Not found.";
}
