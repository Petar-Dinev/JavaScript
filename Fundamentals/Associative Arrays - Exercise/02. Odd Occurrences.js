function oddOccurrences(input) {
  let obj = new Map();

  for (let string of input.toLowerCase().split(" ")) {
    if (!obj.has(string)) {
      obj.set(string, 1);
    } else {
      obj.set(string, obj.get(string) + 1);
    }
  }

  // let entries = Object.keys(obj)
  let result = "";
  for (let [key, value] of obj) {
    if (obj.get(key) % 2 != 0) {
      result += `${key} `;
    }
  }
  console.log(result);
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
