function activationKeys(input) {
  let key = input.shift();
  while (input[0] != "Generate") {
    if (input[0].includes("Contains")) {
      let [command, substring] = input.shift().split(">>>");
      if (key.includes(substring)) {
        console.log(`${key} contains ${substring}`);
      } else {
        console.log("Substring not found!");
      }
    } else if (input[0].includes("Flip")) {
      let [command, type, startIndex, endIndex] = input.shift().split(">>>");
      let slice = key.slice(startIndex, endIndex);
      key = key.split(slice);
      if (type == "Upper") {
        slice = slice.toUpperCase();
      } else {
        slice = slice.toLowerCase();
      }
      key = key.join(slice);
      console.log(key);
    } else if (input[0].includes("Slice")) {
      let [command, startIndex, endIndex] = input.shift().split(">>>");
      let slice = key.slice(startIndex, endIndex);
      key = key.split(slice).join("");
      console.log(key);
    }
  }
  console.log(`Your activation key is: ${key}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
