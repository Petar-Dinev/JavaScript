function solve(input) {
  let allStops = input.shift();

  while (input[0] != "Travel") {
    let [command, arg1, arg2] = input.shift().split(":");
    if (command == "Add Stop") {
      let index = Number(arg1);
      let stop = arg2;
      if (index >= 0 && index < allStops.length) {
        let firstPart = allStops.slice(0, index);
        let secondPart = allStops.slice(index);
        allStops = firstPart + stop + secondPart;
      }
      console.log(allStops);
    } else if (command == "Remove Stop") {
      let startIndex = Number(arg1);
      let endtIndex = Number(arg2);
      if (
        startIndex >= 0 &&
        startIndex < allStops.length &&
        endtIndex >= 0 &&
        endtIndex < allStops.length
      ) {
        let firstPart = allStops.slice(0, startIndex);
        let secondPart = allStops.slice(endtIndex + 1);
        allStops = firstPart + secondPart;
      }
      console.log(allStops);
    } else if (command == "Switch") {
      if (allStops.includes(arg1)) {
        allStops = allStops.split(arg1).join(arg2);
      }
      console.log(allStops);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${allStops}`);
}

solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
