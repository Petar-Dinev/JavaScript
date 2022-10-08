function tennisRanklist(input) {
  let index = 0;
  const tournamentsCount = Number(input[index]);
  index++;
  const startPoints = Number(input[index]);
  index++;
  let wonPoints = 0;
  let winCounter = 0;

  for (let i = 0; i < tournamentsCount; i++) {
    let currentScore = input[index];
    index++;
    if (currentScore == "W") {
      wonPoints += 2000;
      winCounter++;
    } else if (currentScore == "F") {
      wonPoints += 1200;
    } else if (currentScore == "SF") {
      wonPoints += 720;
    }
  }
  let totalPoints = startPoints + wonPoints;
  let averagePointsPerTournament = Math.floor(wonPoints / tournamentsCount);
  let percentageForWins = ((winCounter / tournamentsCount) * 100).toFixed(2);

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${averagePointsPerTournament}`);
  console.log(`${percentageForWins}%`);
}
