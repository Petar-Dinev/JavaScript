function triplesOfLatinLetters(num) {
  num = Number(num);

  for (let i = 0; i < num; i++) {
    let output = "";
    let firstLetter = String.fromCharCode(97 + i);
    for (let k = 0; k < num; k++) {
      let secondLetter = String.fromCharCode(97 + k);
      for (let l = 0; l < num; l++) {
        let thirdLetter = String.fromCharCode(97 + l);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}

triplesOfLatinLetters("3");
