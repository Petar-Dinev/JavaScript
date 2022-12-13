function tseamAccount(input) {
  let games = input.shift().split(" ");
  let index = 0;
  let currentLine = input[index];
  index++;

  while (currentLine != "Play!") {
    let [command, gameOrExpansion] = currentLine.split(" ");

    switch (command) {
      case "Install":
        if (!games.includes(gameOrExpansion)) {
          games.push(gameOrExpansion);
        }
        break;
      case "Uninstall":
        if (games.includes(gameOrExpansion)) {
          games.splice(games.indexOf(gameOrExpansion), 1);
        }
        break;
      case "Update":
        if (games.includes(gameOrExpansion)) {
          let gameIndex = games.indexOf(gameOrExpansion);
          games.splice(gameIndex, 1);
          games.push(gameOrExpansion);
        }
        break;
      case "Expansion":
        let [game, expansion] = gameOrExpansion.split("-");
        if (games.includes(game)) {
          let gameIndex = games.indexOf(game);
          games.splice(gameIndex + 1, 0, gameOrExpansion.split("-").join(":"));
        }
        break;
    }
    currentLine = input[index];
    index++;
  }

  console.log(games.join(" "));
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
