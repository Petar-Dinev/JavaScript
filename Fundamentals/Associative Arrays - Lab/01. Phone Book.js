function phoneBook(arr) {
  let phoneBook = {};

  for (let el of arr) {
    let [name, number] = el.split(" ");
    phoneBook[name] = number;
  }

  for (let key of Object.keys(phoneBook)) {
    console.log(key, "->", phoneBook[key]);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
