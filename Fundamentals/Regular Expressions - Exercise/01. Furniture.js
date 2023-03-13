function solve(input) {
  let pattern =
    />>(?<name>[A-Z][A-z]+)<<(?<price>\d+.{0,}\d{0,})!(?<quantity>\d+)/;

  let result = {
    items: [],
    totalMoney: 0,
  };

  while (input[0] != "Purchase") {
    let line = input.shift();
    let match = pattern.exec(line);
    if (match != null) {
      result.items.push(match[1]);
      result.totalMoney += Number(match[2]) * Number(match[3]);
    }
  }

  console.log("Bought furniture:");

  if (result.items.length != 0) {
    for (let el of result.items) {
      console.log(el);
    }
  }

  console.log(`Total money spend: ${result.totalMoney.toFixed(2)}`);
}

solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
