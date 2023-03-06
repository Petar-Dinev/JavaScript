function search() {
  let searchField = document.getElementById("searchText");
  let liElementsArr = Array.from(document.getElementById("towns").children);
  let searchText = searchField.value;
  let matches = 0;
  liElementsArr.forEach((li) => {
    if (li.textContent.includes(searchText)) {
      li.style.fontWeight = "bold";
      li.style.textDecoration = "underline";
      matches++;
    } else {
      li.style.fontWeight = "normal";
      li.style.textDecoration = "none";
    }
  });
  searchField.value = "";
  document.getElementById("result").textContent = `${matches} matches found`;
}
