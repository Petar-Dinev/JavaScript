function reverseString(string) {
  let output = "";
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  console.log(output);
}
