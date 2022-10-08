function salary(input) {
  let index = 0;
  const tabsCount = Number(input[index]);
  index++;
  let salary = Number(input[index]);
  index++;
  let isHaveSalary = true;

  for (let i = 0; i < tabsCount; i++) {
    let tempTab = input[index];
    index++;
    if (tempTab === "Facebook") {
      salary -= 150;
    } else if (tempTab === "Instagram") {
      salary -= 100;
    } else if (tempTab === "Reddit") {
      salary -= 50;
    }
    if (salary <= 0) {
      console.log("You have lost your salary.");
      isHaveSalary = false;
      break;
    }
  }
  if (isHaveSalary) {
    console.log(salary);
  }
}
