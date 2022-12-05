function backToThePast(input) {
  let yearBackInPast = 1800;
  let money = Number(input[0]);
  let yearToNeedLive = Number(input[1]);
  let yearsOfIvan = 18;

  for (let i = yearBackInPast; i <= yearToNeedLive; i++) {
    if (i % 2 == 0) {
      money -= 12000;
    } else {
      money -= 12000 + 50 * yearsOfIvan;
    }
   yearsOfIvan++;
  }

  if (money >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${money.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(`He will need ${Math.abs(money.toFixed(2))} dollars to survive.`);
  }
}

backToThePast(["100000.15", "1808"]);
