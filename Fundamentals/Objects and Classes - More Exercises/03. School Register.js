function schoolRegister(input) {
  let result = new Map();

  for (let line of input) {
    let tokens = line.split(", ");
    let name = tokens[0].split(": ")[1];
    let grade = tokens[1].split(": ")[1];
    let avgScore = tokens[2].split(": ")[1];

    if (avgScore >= 3.0) {
      if (!result.has(grade)) {
        result.set(grade, {
          names: [name],
          score: [Number(avgScore)],
        });
      } else {
        let obj = result.get(grade);
        obj.names.push(name);
        obj.score.push(Number(avgScore));
        result.set(grade, obj);
      }
    }
  }

  let sorted = Array.from(result.entries()).sort((a, b) => a[0] - b[0]);

  for (let [grade, obj] of sorted) {
    console.log(`${Number(grade) + 1} Grade`);
    console.log(`List of students: ${obj.names.join(", ")}`);
    let avg = 0;
    for (let score of obj.score) {
      avg += score;
    }
    avg /= obj.score.length;
    console.log(`Average annual score from last year: ${avg.toFixed(2)}`);
    console.log("");
  }
}

// schoolRegister([
//   "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//   "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//   "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//   "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//   "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//   "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//   "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//   "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//   "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//   "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//   "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//   "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
// ]);
schoolRegister([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
