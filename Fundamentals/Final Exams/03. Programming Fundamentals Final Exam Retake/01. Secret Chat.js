function secretChat(input) {
  let pass = input.shift();

  while (input[0] != "Reveal") {
    let line = input.shift();
    let [command, val1, val2] = line.split(":|:");
    if (command == "ChangeAll") {
      pass = pass.split(val1).join(val2);
      console.log(pass);
    } else if (command == "InsertSpace") {
      val1 = Number(val1);
      let firstpart = pass.slice(0, val1);
      let secondpart = pass.slice(val1);
      pass = firstpart + " " + secondpart;
      console.log(pass);
    } else if (command == "Reverse") {
      if (pass.includes(val1)) {
        let index = pass.indexOf(val1);
        let part = pass.slice(index, index + val1.length);
        part = part.split("").reverse().join("");
        let firstpart = pass.slice(0, index);
        let secondpart = pass.slice(index + part.length);
        pass = firstpart + secondpart + part
        console.log(pass);
      } else {
        console.log("error");
      }
    }
  }
  console.log(`You have a new text message: ${pass}`);
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

// secretChat([
//   "Hiware?uiy",
//   "ChangeAll:|:i:|:o",
//   "Reverse:|:?uoy",
//   "Reverse:|:jd",
//   "InsertSpace:|:3",
//   "InsertSpace:|:7",
//   "Reveal",
// ]);

// secretChat([
//   "Hiware?uiy",
//   "ChangeAll:|:i:|:o",
//   "Reverse:|:?uoy",
//   "Reverse:|:jd",
//   "InsertSpace:|:3",
//   "InsertSpace:|:7",
//   "Reveal",
// ]);
