function examPreparation(input) {
  let index = 0;
  let poorGrades = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let poorGradesCount = 0;
  let averageScore = 0;
  let problemsCount = 0;
  let currProblem;
  while (command !== "Enough") {
    problemsCount++;
    currProblem = command;
    let currProblemScore = Number(input[index]);
    index++;
    if (currProblemScore <= 4) {
      poorGradesCount++;
    }
    if (poorGradesCount >= poorGrades) {
      console.log(`You need a break, ${poorGradesCount} poor grades.`);
      break;
    }
    averageScore += currProblemScore;
    command = input[index];
    index++;
  }
  if (poorGrades > poorGradesCount) {
    console.log(`Average score: ${(averageScore / problemsCount).toFixed(2)}`);
    console.log(`Number of problems: ${problemsCount}`);
    console.log(`Last problem: ${currProblem}`);
  }
}
