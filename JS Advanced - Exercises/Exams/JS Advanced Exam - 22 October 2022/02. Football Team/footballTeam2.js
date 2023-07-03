class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(arr) {
    let newPlayers = [];
    for (let playerInfo of arr) {
      let [name, age, playerValue] = playerInfo.split("/");
      age = Number(age);
      playerValue = Number(playerValue);
      let player = this.invitedPlayers.find((x) => x.name == name);

      if (player === undefined) {
        this.invitedPlayers.push({ name, age, playerValue });
        newPlayers.push(name);
      } else {
        if (player.playerValue < playerValue) {
          player.playerValue = playerValue;
        }
      }
    }

    return `You successfully invite ${newPlayers.join(", ")}.`;
  }

  signContract(playerInfo) {
    let [name, playerOffer] = playerInfo.split("/");
    playerOffer = Number(playerOffer);
    let player = this.invitedPlayers.find((p) => p.name == name);
    if (player === undefined) {
      throw new Error(`${name} is not invited to the selection list!`);
    } else {
      let priceDifference = Math.abs(playerOffer - player.playerValue);
      if (player.playerValue > playerOffer) {
        throw new Error(
          `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
        );
      }
      player.playerValue = "Bought";
      return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`;
    }
  }

  ageLimit(name, age) {
    let player = this.invitedPlayers.find((x) => x.name == name);
    if (player === undefined) {
      throw new Error(`${name} is not invited to the selection list!`);
    } else {
      let ageDiff = Math.abs(age - player.age);
      if (age > player.age && ageDiff < 5) {
        return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
      } else if (age > player.age && ageDiff >= 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      } else if (age <= player.age) {
        return `${name} is above age limit!`;
      }
    }
  }

  transferWindowResult() {
    let result = [];
    let sorterPlayers = this.invitedPlayers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    result.push("Players list:");
    for (let playerInfo of sorterPlayers) {
      result.push(`Player ${playerInfo.name}-${playerInfo.playerValue}`);
    }
    return result.join("\n");
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
