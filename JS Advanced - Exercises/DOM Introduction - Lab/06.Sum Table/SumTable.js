function sumTable() {
  const rows = Array.from(document.querySelectorAll("tr")).slice(1, -1);
//   console.log(rows);
  let sum = 0;
  for (let row of rows) {
    let value = Number(row.lastElementChild.textContent);
    sum += value;
  }
//   console.log(sum);
  document.getElementById("sum").textContent = sum;
}
