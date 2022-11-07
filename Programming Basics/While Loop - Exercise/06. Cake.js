function cake(input) {
  let index = 0;
  let width = Number(input[index]);
  index++;
  let length = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let pieacesOfCake = width * length;

  while ((command != "STOP") & (pieacesOfCake > 0)) {
    command = Number(command);
    pieacesOfCake -= command;
    command = input[index];
    index++;
  }

  if (pieacesOfCake > 0) {
    console.log(`${pieacesOfCake} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${pieacesOfCake * -1} pieces more.`
    );
  }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
