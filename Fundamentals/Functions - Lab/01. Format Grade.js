function formatGrade(grade) {
  grade = grade.toFixed(2);
  if (grade < 3.0) {
    grade = 2;
  }
  let output = "";
  if (grade < 3.0) {
    output = `Fail (${grade})`;
  } else if (grade < 3.5) {
    output = `Poor (${grade})`;
  } else if (grade < 4.5) {
    output = `Good (${grade})`;
  } else if (grade < 5.5) {
    output = `Very good (${grade})`;
  } else {
    output = `Excellent (${grade})`;
  }
  console.log(output);
}

formatGrade(3.3333)
