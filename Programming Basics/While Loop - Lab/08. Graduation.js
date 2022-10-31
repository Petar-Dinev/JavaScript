function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let currGrade = Number(input[index]);
  index++;
  let isExcluded = false;
  let badGrade = 0;
  let avgGrade = 0;
  let grade = 0;

  while (true) {
    if (currGrade < 4.0) {
      badGrade++;
    }

    if (badGrade >= 2) {
      console.log(`${name} has been excluded at ${grade} grade`);
      isExcluded = true;
      break;
    }
    grade++;
    avgGrade += currGrade;
    if (grade == 12) {
      break;
    }
    currGrade = Number(input[index]);
    index++;
  }
  if (!isExcluded) {
    console.log(
      `${name} graduated. Average grade: ${(avgGrade / grade).toFixed(2)}`
    );
  }
}
