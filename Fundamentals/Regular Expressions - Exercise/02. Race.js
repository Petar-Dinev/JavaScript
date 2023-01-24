function race(input) {
  let participants = {};
  let participantsArr = input.shift().split(", ");
  for (let participiant of participantsArr) {
    participants[participiant] = 0;
  }

  let namePattern = /[A-Za-z]/g;
  let numPattern = /\d{1}/g;

  while (input[0] != "end of race") {
    let line = input.shift();
    let name = line.match(namePattern).join("");
    let sum = 0;
    line.match(numPattern).forEach((el) => (sum += Number(el)));
    if (participants[name] !== undefined) {
      participants[name] += sum;
    }
  }

  let sorted = Object.entries(participants).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
