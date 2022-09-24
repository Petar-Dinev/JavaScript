function calorieObject(str) {
  let obj = {};

  for (let i = 0; i < str.length; i += 2) {
    obj[str[i]] = Number(str[i + 1]);
  }

  console.log(obj);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
