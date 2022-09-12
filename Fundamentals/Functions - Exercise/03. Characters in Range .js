function charactersInRange(char1, char2) {
  let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
  let end = Math.max(char1.charCodeAt(), char2.charCodeAt());
  let output = "";
  for (let i = start + 1; i < end; i++) {
    output += String.fromCharCode(i) + " ";
  }
  console.log(output);
}

charactersInRange("#", ":");
