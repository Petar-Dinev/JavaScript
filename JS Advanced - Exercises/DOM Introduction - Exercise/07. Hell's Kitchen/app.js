function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = document.querySelector("#inputs textarea").value;
    input = JSON.parse(input)
    let restaurants = {};
    for (let line of input) {
      let [name, workers] = line.split(" - ");
      workers = workers.split(", ");
      if (restaurants[name] == undefined) {
        restaurants[name] = {};
      }
      for (let workerInfo of workers) {
        let [worker, salary] = workerInfo.split(" ");
        restaurants[name][worker] = Number(salary);
      }
    }
    let theBestRestaurant = "";
    let theBestAvgSalary = 0;
    for (let [restaurant, employes] of Object.entries(restaurants)) {
      let currentRestaurantAvgSalary = 0;
      let allEmployesSalaries = Object.values(employes);
      allEmployesSalaries.forEach((x) => (currentRestaurantAvgSalary += x));
      currentRestaurantAvgSalary /= allEmployesSalaries.length;
      if (currentRestaurantAvgSalary > theBestAvgSalary) {
        theBestAvgSalary = currentRestaurantAvgSalary;
        theBestRestaurant = restaurant;
      }
    }
    let sortedEmployesSalaries = Object.entries(
      restaurants[theBestRestaurant]
    ).sort((a, b) => b[1] - a[1]);
    document.querySelector('#bestRestaurant p').textContent =`Name: ${theBestRestaurant} Average Salary: ${theBestAvgSalary.toFixed(2)} Best Salary: ${sortedEmployesSalaries[0][1].toFixed(2)}`
   let workersOutput = '';
    for (let [worker, salary] of sortedEmployesSalaries) {
      workersOutput += `Name: ${worker} With Salary: ${salary} `;
    }
    document.querySelector('#workers p').textContent = workersOutput.trim();
  }
}
