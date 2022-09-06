function rightPlace(string, char, match) {
  let matched = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] != "_") {
      matched += string[i];
    } else {
      matched += char;
    }
  }

  if (match == matched) {
    console.log("Matched");
  } else {
    console.log("Not matched");
  }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
