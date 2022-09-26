function addressBook(arr) {
  let result = {};

  for (let data of arr) {
    let [name, address] = data.split(":");
    result[name] = address;
  }

  let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
  for (let el of sorted) {
    console.log(el[0], "->", el[1]);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
