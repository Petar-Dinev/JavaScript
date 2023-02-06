function mirrorWords(input) {
  let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  let text = input[0];

  let result = [];
  let match = pattern.exec(text);

  while (match != null) {
    result.push(match[2]);
    result.push(match[3]);
    match = pattern.exec(text);
  }
  if (result.length > 0) {
    console.log(`${result.length / 2} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  let output = [];
  for (let i = 0; i < result.length - 1; i += 2) {
    let reverseWord = result[i + 1].split("").reverse().join("");
    if (result[i] === reverseWord) {
      output.push(`${result[i]} <=> ${result[i + 1]}`)
    }
  }
  if (output.length > 0) {
    console.log("The mirror words are:");
    console.log(output.join(', '));
  } else {
    console.log("No mirror words!");
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
