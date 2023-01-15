function solve(text) {
  let pattern = /([A-Za-z])(\d+)([A-Za-z])/g;
  let sum = 0;
  let match = pattern.exec(text);

  while (match != null) {
    let firstLetter = match[1];
    let num = Number(match[2]);
    let secondLetter = match[3];

    if (firstLetter == firstLetter.toUpperCase()) {
      let value = firstLetter.charCodeAt(0) - 64;
      num /= value;
    } else {
      let value = firstLetter.charCodeAt(0) - 96;
      num *= value;
    }

    if (secondLetter == secondLetter.toUpperCase()) {
      let value = secondLetter.charCodeAt(0) - 64;
      num -= value;
    } else {
      let value = secondLetter.charCodeAt(0) - 96;
      num += value;
    }
    sum += num;
    match = pattern.exec(text);
  }

  console.log(sum.toFixed(2));
}

solve("A12b s17G");
solve("P34562Z q2576f H456z");
solve("a1A");
