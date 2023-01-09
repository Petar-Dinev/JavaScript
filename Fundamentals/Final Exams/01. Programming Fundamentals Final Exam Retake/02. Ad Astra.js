function adAstra(input) {
  let text = input[0];
  let pattern = /(#|\|)([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

  let result = [];

  let match = pattern.exec(text);
  let totalCalories = 0;

  while (match != null) {
    result.push(match[2], match[3], match[4]);
    totalCalories += Number(match[4]);
    match = pattern.exec(text);
  }

  let daysWithFood = Math.floor(totalCalories / 2000);

  console.log(`You have food to last you for: ${daysWithFood} days!`);

  for (let i = 0; i < result.length; i += 3) {
    console.log(
      `Item: ${result[i]}, Best before: ${result[i + 1]}, Nutrition: ${
        result[i + 2]
      }`
    );
  }
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
// adAstra([
//   "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
// ]);
// adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
