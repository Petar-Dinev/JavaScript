class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department) {
      throw new Error("Invalid input!");
    } else if (salary < 0) {
      throw new Error("Invalid input!");
    } else {
      if ((this.departments[department] == undefined)) {
        this.departments[department] = { employes: [], allSalary: 0 };
      }
      this.departments[department]["employes"].push({ name, salary, position });
      this.departments[department].allSalary += salary;

      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
  }

  bestDepartment() {
    let sortedDepartments = Object.entries(this.departments).sort(
      (a, b) =>
        b[1].allSalary / b[1].employes.length - a[1].allSalary / a[1].employes.length
    );
    let bestDepartment = sortedDepartments[0];

    return (
        `Best Department is: ${bestDepartment[0]}
Average salary: ${(bestDepartment[1].allSalary / bestDepartment[1].employes.length).toFixed(2)}
${bestDepartment[1]['employes'].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
      .map((x) => `${x.name} ${x.salary} ${x.position}`)
      .join("\n")}`)
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
