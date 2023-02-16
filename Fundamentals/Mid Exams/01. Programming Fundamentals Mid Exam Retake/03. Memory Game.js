function memoryGame(input) {
  let sequence = input.shift().split(" ");
  let moves = 0;

  while (input[0] != "end" && sequence.length > 0) {
    moves++;
    let [firstIndex, secondIndex] = input.shift("").split(" ").map(Number);
    let midOfSequence = sequence.length / 2;
    if (
      sequence[firstIndex] == undefined ||
      sequence[secondIndex] == undefined ||
      firstIndex == secondIndex
    ) {
      sequence.splice(midOfSequence, 0, `-${moves}a`, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
    } else if (sequence[firstIndex] == sequence[secondIndex]) {
      let removeNum;
      if (secondIndex > firstIndex) {
        removeNum = sequence.splice(secondIndex, 1);
        sequence.splice(firstIndex, 1);
      } else {
        removeNum = sequence.splice(firstIndex, 1);
        sequence.splice(secondIndex, 1);
      }
      console.log(
        `Congrats! You have found matching elements - ${removeNum[0]}!`
      );
    } else {
      console.log("Try again!");
    }
  }

  if (sequence.length == 0) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log("Sorry you lose :(");
    console.log(`${sequence.join(" ")}`);
  }
}

// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
