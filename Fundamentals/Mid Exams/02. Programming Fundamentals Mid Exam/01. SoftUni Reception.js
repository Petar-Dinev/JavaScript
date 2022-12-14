function softUniReception(input) {
  let students = Number(input.pop());

  let efficiency = 0;
  for (let i = 0; i < input.length; i++) {
    efficiency += Number(input[i]);
  }

  let hours = 0;

  while (students > 0) {
    hours++;
    if (hours % 4 != 0) {
      students -= efficiency;
    }
  }

  console.log(`Time needed: ${hours}h.`);
}

softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
