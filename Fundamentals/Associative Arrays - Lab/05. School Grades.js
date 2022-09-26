function schoolGrades(arr) {
  let result = {};

  for (let el of arr) {
    let grades = el.split(" ");
    let name = grades.shift();
    let avgGrade = 0;
    if (result[name] == undefined) {
      result[name] = [grades, avgGrade];
    } else {
      result[name][0].push(...grades);
    }
    let currentAvgGrade = 0;
    for (let grade of result[name][0]) {
      currentAvgGrade += Number(grade);
    }
    result[name][1] = currentAvgGrade / result[name][0].length;
  }

  let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));
  for (let student of sorted) {
    console.log(`${student}: ${result[student][1].toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
