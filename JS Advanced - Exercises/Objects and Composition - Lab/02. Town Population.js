function townPopulation(arr) {
  let result = {};

  for (let line of arr) {
    let [town, population] = line.split(" <-> ");
    if (result[town] == undefined) {
      result[town] = Number(population);
    } else {
      result[town] += Number(population);
    }
  }

  for (let town in result) {
    console.log(town, ":", result[town]);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
