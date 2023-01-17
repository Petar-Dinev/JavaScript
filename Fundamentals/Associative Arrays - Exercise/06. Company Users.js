function companyUsers(input) {
  let result = {};

  for (let line of input) {
    let [company, employer] = line.split(" -> ");
    if (result[company] === undefined) {
      result[company] = new Set();
    }
    result[company].add(employer);
  }

  let sortedCompanies = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (let company of sortedCompanies) {
    console.log(company);
    for (let employee of Array.from(result[company])) {
      console.log(`-- ${employee}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
