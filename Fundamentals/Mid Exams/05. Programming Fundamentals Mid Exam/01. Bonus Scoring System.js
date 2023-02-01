function solve(input) {
  let students = Number(input.shift());
  let lectures = Number(input.shift());
  let bonus = Number(input.shift());
  let maxScore = 0;
  let attendances = 0;

  for (let i = 0; i < students; i++) {
    let currentStudentScore = Math.ceil(
      (Number(input[i]) / lectures) * (5 + bonus)
    );
    if (currentStudentScore > maxScore) {
      maxScore = currentStudentScore;
      attendances = input[i];
    }
  }

  console.log(`Max Bonus: ${maxScore}.`);
  console.log(`The student has attended ${attendances} lectures.`);
}

solve(["5", "25", "30", "12", "19", "24", "16", "20"]);
solve([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
