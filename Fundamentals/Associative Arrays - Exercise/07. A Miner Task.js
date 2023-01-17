function aMinerTask(input) {
  let result = {};

  for (let i = 0; i < input.length - 1; i += 2) {
    if (result[input[i]] === undefined) {
      result[input[i]] = 0;
    }
    result[input[i]] += Number(input[i + 1]);
  }

  for (let key in result) {
    console.log(key, "->", result[key]);
  }
}

aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
