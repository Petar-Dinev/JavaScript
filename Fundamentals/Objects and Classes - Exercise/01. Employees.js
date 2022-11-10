function employees(input) {
  let myObj = {};

  for (let el of input) {
    myObj[el] = el.length;
  }
  for (let key in myObj) {
    console.log(`Name: ${key} -- Personal Number: ${myObj[key]}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
