function solve(input) {
  let numOfPiece = Number(input.shift());
  const result = {};
  for (let i = 0; i < numOfPiece; i++) {
    let [piece, composer, key] = input.shift().split("|");
    result[piece] = { composer, key };
  }

  while (input[0] != "Stop") {
    let [command, arg1, arg2, arg3] = input.shift().split("|");
    if (command == "Add") {
      if (result[arg1] === undefined) {
        result[arg1] = { composer: arg2, key: arg3 };
        console.log(`${arg1} by ${arg2} in ${arg3} added to the collection!`);
      } else {
        console.log(`${arg1} is already in the collection!`);
      }
    } else if (command == "Remove") {
      if (result[arg1] !== undefined) {
        delete result[arg1];
        console.log(`Successfully removed ${arg1}!`);
      } else {
        console.log(
          `Invalid operation! ${arg1} does not exist in the collection.`
        );
      }
    } else if (command == "ChangeKey") {
      if (result[arg1] !== undefined) {
        result[arg1]["key"] = arg2;
        console.log(`Changed the key of ${arg1} to ${arg2}!`);
      } else {
        console.log(
          `Invalid operation! ${arg1} does not exist in the collection.`
        );
      }
    }
  }

  for (let [piece, obj] of Object.entries(result)) {
    console.log(`${piece} -> Composer: ${obj.composer}, Key: ${obj.key}`);
  }
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
