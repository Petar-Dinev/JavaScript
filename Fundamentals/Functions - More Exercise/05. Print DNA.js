function printDNA(num) {
  let sequence = "ATCGTTAGGG";
  let res = [];
  let i = 1;
  let index = 0;

  while (res.length != num) {
    res.push(output(i, sequence[index], sequence[index + 1]));
    i++;
    index += 2;
    if (i == 5) {
      i = 1;
    }
    if (index == 10) {
      index = 0;
    }
  }

  function output(num, char1, char2) {
    let res = "";
    if (num == 1) {
      res = `**${char1}${char2}**`;
    } else if (num == 2) {
      res = `*${char1}--${char2}*`;
    } else if (num == 3) {
      res = `${char1}----${char2}`;
    } else if (num == 4) {
      res = `*${char1}--${char2}*`;
    }

    return res;
  }

  console.log(res.join("\n"));
}

// printDNA(4)
printDNA(10);
